// src/games/calc.js
import { runGame } from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const num1 = getRandomNumber(1, 30);
  const num2 = getRandomNumber(1, 30);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = 0;
  }

  const question = `${num1} ${operator} ${num2}`;
  return { question, correctAnswer: String(correctAnswer) };
};

const runCalcGame = () => {
  const gameDescription = 'What is the result of the expression?';
  runGame(gameDescription, generateRound);
};

export default runCalcGame;