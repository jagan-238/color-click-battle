import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar"; 

function Home() {
  return (
    <div className="home-container">
      {/* Navbar*/}
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <h1> Color Clash</h1>
        <p>Match and arrange the colors as quickly as you can to score points and beat the computer!</p>
      </div>

      {/* Rules Section */}
      <section className="rules-section">
        <h2>How to Play</h2>
        <div className="rules-grid">
          <div className="rule-card">
            <h3>Start the Game</h3>
            <p>Click the "Start Game" button to begin a 3-minute match against the computer.</p>
          </div>
          <div className="rule-card">
            <h3>Find the Target Color</h3>
            <p>Each turn shows a target color. Click a box to select it. If the color matches, you earn a point!</p>
          </div>
          <div className="rule-card">
            <h3>Player Turn Timer</h3>
            <p>You have 20 seconds to find the color on your turn. The timer counts down in real time.</p>
          </div>
          <div className="rule-card">
            <h3>Computer Turn</h3>
            <p>When your turn ends, the computer will automatically try to find the target color.</p>
          </div>
          <div className="rule-card">
            <h3>Score Points</h3>
            <p>Each correct selection earns a point. The player and computer compete for the highest score.</p>
          </div>
          <div className="rule-card">
            <h3>Game Over</h3>
            <p>The game ends after 3 minutes. The player with the most points wins!</p>
          </div>
          <div className="rule-card">
            <h3>Keep Practicing</h3>
            <p>Improve your reaction time and accuracy by playing multiple rounds and mastering color patterns.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Color Clash</h2>
        <p>
          Color Clash is a fast-paced, engaging game designed to test your reflexes and color perception.
          Swap and match colors to complete levels, compete with friends, or challenge the computer.
        </p>
        <p>
          Each round presents a new color sequence to memorize and select. The game encourages
          strategic thinking, quick decision-making, and keen observation. The more accurately you
          match the target colors, the higher your score!
        </p>
        <p>
          The game improves visual memory and reaction time. You can play solo to beat
          your own record or challenge friends to see who has the fastest eyes. With increasing
          difficulty and a variety of color patterns, every round is a new challenge.
        </p>
        <p>
          Have fun, stay sharp, and see how fast and accurately you can conquer the colors!
        </p>
      </section>
    </div>
  );
}

export default Home;

