import React, { useState, useEffect } from "react";
import "../styles/gameRoom.css";

const clickSoundUrl = "https://www.soundjay.com/button/sounds/button-16.mp3";

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function GameRoom() {
  const initialColors = [
    "#ff4d4d","#ffb84d","#ffff4d","#4dff4d","#4dffff","#4d4dff","#b84dff","#ff4db8",
    "#ff6666","#ffcc66","#ffff66","#66ff66","#66ffff","#6666ff","#cc66ff","#ff66cc",
    "#ff9999","#ffdd99","#ffff99","#99ff99","#ff8080","#80ff80","#8080ff","#ff80ff"
   
  ];

  const [colors, setColors] = useState([]);
  const [revealed, setRevealed] = useState([]);
  const [targetIndex, setTargetIndex] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [turn, setTurn] = useState("player");
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [playerTimeLeft, setPlayerTimeLeft] = useState(20);
  const [gameTimeLeft, setGameTimeLeft] = useState(180); // 3 minutes total
  const [gameStarted, setGameStarted] = useState(false);

  const clickSound = new Audio(clickSoundUrl);

  // Start Game
  const startGame = () => {
    const shuffled = shuffleArray([...initialColors]);
    setColors(shuffled);
    setRevealed(Array(shuffled.length).fill(false));
    setTargetIndex(Math.floor(Math.random() * shuffled.length));
    setPlayerScore(0);
    setComputerScore(0);
    setTurn("player");
    setMessage("Your turn! Find the target color.");
    setGameOver(false);
    setPlayerTimeLeft(20);
    setGameTimeLeft(180);
    setGameStarted(true);
  };

  // Total game timer
  useEffect(() => {
    if (!gameStarted || gameOver) return;
    if (gameTimeLeft <= 0) {
      setGameOver(true);
      setMessage("⏱ Time's up!");
      return;
    }
    const timer = setInterval(() => setGameTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [gameTimeLeft, gameStarted, gameOver]);

  // Player turn timer (20 sec)
  useEffect(() => {
    if (!gameStarted || gameOver || turn !== "player") return;
    if (playerTimeLeft <= 0) {
      setMessage("⏱ Time's up! Computer's turn.");
      setTurn("computer");
      return;
    }
    const timer = setInterval(() => setPlayerTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [playerTimeLeft, turn, gameStarted, gameOver]);

  // Computer turn
  useEffect(() => {
    if (turn === "computer" && !gameOver) {
      setMessage("Computer is playing...");
      const timeout = setTimeout(() => {
        const hiddenIndexes = revealed
          .map((rev, i) => (!rev ? i : null))
          .filter(i => i !== null);

        if (hiddenIndexes.length === 0) return;

        const pick = hiddenIndexes[Math.floor(Math.random() * hiddenIndexes.length)];
        const newRevealed = [...revealed];

        if (pick === targetIndex) {
          newRevealed[pick] = true; // reveal for both
          setRevealed(newRevealed);
          setComputerScore(prev => prev + 1);
          setMessage("Computer found the color! 🤖");

          const remainingIndexes = newRevealed
            .map((rev, i) => (!rev ? i : null))
            .filter(i => i !== null);

          if (remainingIndexes.length > 0) {
            setTargetIndex(remainingIndexes[Math.floor(Math.random() * remainingIndexes.length)]);
          }
        } else {
          setMessage("Computer missed the color!");
        }

        setTurn("player");
        setPlayerTimeLeft(20);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [turn, revealed, targetIndex, gameOver]);

  // Player click
  const handleClick = (index) => {
    if (turn !== "player" || revealed[index] || gameOver) return;

    clickSound.play();

    const newRevealed = [...revealed];
    if (index === targetIndex) {
      newRevealed[index] = true; // reveal for both
      setRevealed(newRevealed);
      setPlayerScore(prev => prev + 1);
      setMessage("You found the color! 🎉");

      const remainingIndexes = newRevealed
        .map((rev, i) => (!rev ? i : null))
        .filter(i => i !== null);

      if (remainingIndexes.length > 0) {
        setTargetIndex(remainingIndexes[Math.floor(Math.random() * remainingIndexes.length)]);
      }
    } else {
      setMessage("Wrong! No points.");
    }

    setTurn("computer");
  };

  // End game if all colors revealed
  useEffect(() => {
    if (revealed.length > 0 && revealed.every(r => r)) {
      setGameOver(true);
      setMessage("🎉 All colors found!");
    }
  }, [revealed]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="container-full">
      <h1>🎨 Color Match Duel</h1>

      {gameStarted && !gameOver && (
        <div className="scores">
          <div>Player: {playerScore}</div>
          <div>Computer: {computerScore}</div>
          <div>Time Left: {formatTime(gameTimeLeft)}</div>
          {turn === "player" && <div>Your Turn: {playerTimeLeft}s</div>}
        </div>
      )}

      {!gameStarted || gameOver ? (
        <>
          {gameOver && (
            <h2>
              {playerScore > computerScore
                ? "🎉 You Win!"
                : playerScore < computerScore
                ? "Computer Wins! 🤖"
                : "It's a Draw!"}
            </h2>
          )}
          <button className="start-btn" onClick={startGame}>
            {gameOver ? "Start New Game" : "Start Game"}
          </button>
        </>
      ) : (
        <>
          <p>Target Color:</p>
          <div className="target-display" style={{ backgroundColor: colors[targetIndex] }} />
          <p>{message}</p>
          <div className="targets-grid">
            {colors.map((color, i) => (
              <div
                key={i}
                onClick={() => handleClick(i)}
                className={`color-block ${revealed[i] ? "revealed" : ""}`}
                style={{
                  backgroundColor: revealed[i] ? color : "#ccc",
                  boxShadow: revealed[i] ? "0 0 10px #4caf50" : "none"
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default GameRoom;
