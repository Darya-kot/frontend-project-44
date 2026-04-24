// src/games/gcd.js
import { runGame } from '../index.js';

// Алгоритм Евклида для нахождения НОД
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const correctAnswer = String(gcd(num1, num2));
  const question = `${num1} ${num2}`;
  return { question, correctAnswer };
};

const runGcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  runGame(gameDescription, generateRound);
};

export default runGcdGame
