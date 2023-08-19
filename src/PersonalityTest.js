// src/PersonalityTest.js
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
import React, { Component } from "react";

class PersonalityTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      answers: []
    };
    this.questions = [
      {
        question: "What's your favorite color?",
        options: ["Red", "Blue", "Green", "Yellow"]
      },
      {
        question: "What's your ideal vacation destination?",
        options: ["Beach", "Mountains", "City", "Countryside"]
      },
      {
        question: "Choose a hobby:",
        options: ["Reading", "Hiking", "Cooking", "Painting"]
      }
    ];
  }

  handleOptionClick = (option) => {
    const { questionIndex, answers } = this.state;
    answers[questionIndex] = option;
    this.setState({
      answers,
      questionIndex: questionIndex + 1
    });
  };

  renderResult = () => {
    const { answers } = this.state;
    // Calculate personality based on answers (a simple example)
    let personality = "";
    if (answers[0] === "Red") personality = "Adventurous";
    else if (answers[0] === "Blue") personality = "Calm";
    else if (answers[0] === "Green") personality = "Creative";
    else if (answers[0] === "Yellow") personality = "Energetic";
    return <p>Your personality is {personality}!</p>;
  };

  render() {
    const { questionIndex, answers } = this.state;

    if (questionIndex < this.questions.length) {
      const { question, options } = this.questions[questionIndex];
      return (
        <div>
          <h1>Personality Test</h1>
          <h3>Question {questionIndex + 1}:</h3>
          <p>{question}</p>
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <button
                  className="big-button"
                  onClick={() => this.handleOptionClick(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Personality Test Result</h1>
          {this.renderResult()}
        </div>
      );
    }
  }
}

export default PersonalityTest;
