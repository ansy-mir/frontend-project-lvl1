import { cons } from '@hexlet/pairs';
import getRandomNumber from '../src/getRandom.js';

export const taskDescription = 'Find the greatest common divisor of given numbers.';

const NOD = (a, b) => ((!b) ? a : NOD(b, a % b));

const gcd = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);

  const correctAnswer = String(NOD(a, b));
  const question = `Question: ${a} ${b}`;

  return cons(question, correctAnswer);
};
export default gcd;
