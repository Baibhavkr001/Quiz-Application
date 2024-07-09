import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to the Quiz Application</h1>
        <p>Challenge yourself or create new quizzes for others to take!</p>
      </header>
      <div className="landing-buttons">
        <button
          className="landing-button"
          onClick={() => (window.location.href = "/quiz-taker")}
        >
          Take a Quiz
        </button>
        <button
          className="landing-button"
          onClick={() => (window.location.href = "/quiz-creator")}
        >
          Create a Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
