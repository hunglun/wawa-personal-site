import React, { useState } from "react";
import "./App.css";
import PersonalityTest from "./PersonalityTest";

function App() {
  const [play, setPlay] = useState(false);
  return (
    <div className="app">
      <header className="header">
        <img src="./tiffany-landing-page-pic.png" alt="South Park Logo" />
        <h1>Welcome to Tiffany's Magical World</h1>
        <p>
          Explore Tiffany's enchanting world filled with South Park Characters,
          rainbows, and fun adventures!
        </p>
        <button
          className="btn"
          onClick={() => {
            setPlay(true);
          }}
        >
          Let's Go on an Adventure
        </button>
        {play && <PersonalityTest />}
      </header>
      <section className="about">
        <h2>About Tiffany</h2>
        <p>
          Tiffany is an imaginative 11-year-old girl who loves South Park,
          drawing, and making new friends.
        </p>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Tiffany's Magical World</p>
      </footer>
    </div>
  );
}

export default App;
