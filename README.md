# wawa-personal-site
Created with CodeSandbox


import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Who is the main character of South Park?',
    options: ['Stan', 'Kyle', 'Cartman', 'Kenny'],
    answer: 'Stan'
  },
  {
    question: 'What is the name of the elementary school in South Park?',
    options: ['South Park Elementary', 'Springfield Elementary', 'Waldorf Elementary', 'Central Elementary'],
    answer: 'South Park Elementary'
  },
  {
    question: 'What is the catchphrase of Eric Cartman?',
    options: ['Oh my God!', 'Mmmkay', 'Respect my authoritah!', 'I'm super cereal!'],
    answer: 'Respect my authoritah!'
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  return (
    <div className="App">
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Quiz completed!</h2>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
}

export default App;