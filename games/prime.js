import { cons } from '@hexlet/pairs';
import getRandomNumber from '../src/getRandom.js';

export const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const num = getRandomNumber(1, 100);

  let correctAnswer;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      correctAnswer = 'no';
      break;
    }
    correctAnswer = 'yes';
  }

  const question = `Question: ${num}`;

  return cons(question, correctAnswer);
};
export default prime;
