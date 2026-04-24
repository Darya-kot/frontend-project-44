// src/games/progression.js
import { runGame } from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Генерация арифметической прогрессии
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomNumber(5, 10); // длина от 5 до 10
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 10);
  const progression = generateProgression(start, step, length);
  
  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  
  const question = progression.join(' ');
  return { question, correctAnswer };
};

const runProgressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';
  runGame(gameDescription, generateRound);
};

export default runProgressionGame;