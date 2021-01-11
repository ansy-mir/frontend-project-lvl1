import { cons } from '@hexlet/pairs';
import getRandomNumber from '../src/getRandom.js';

export const taskDescription = 'What number is missing in the progression?';

const progression = () => {
  const arr = [];

  const step = getRandomNumber(1, 10);
  const startNum = getRandomNumber(1, 50);
  const length = getRandomNumber(5, 10);

  for (let i = startNum; i <= (startNum + step * length); i += step) {
    arr.push(i);
  }
  const x = getRandomNumber(1, arr.length);

  const correctAnswer = String(arr[x]);

  const begin = arr.slice(0, x).join(' ');
  const end = arr.slice(x + 1, arr.length).join(' ');

  const question = `Question: ${begin} .. ${end}`;

  return cons(question, correctAnswer);
};

export default progression;
