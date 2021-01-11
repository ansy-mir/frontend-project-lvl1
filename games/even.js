import { cons } from '@hexlet/pairs';
import getRandomNumber from '../src/getRandom.js';

export const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = () => {
  const randomNumber = getRandomNumber(1, 100);

  const question = randomNumber;
  let correctAnswer;

  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else { correctAnswer = 'no'; }

  return cons(question, correctAnswer);
};
export default isEven;
