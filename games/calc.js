import { cons } from '@hexlet/pairs';
import getRandomNumber from '../src/getRandom.js';

export const taskDescription = 'What is the result of the expression?';

const calculate = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);

  const randomNumberForSign = getRandomNumber(1, 3);
  let randomSign;

  let correctAnswer;

  switch (randomNumberForSign) {
    case 1:
      randomSign = '+';
      correctAnswer = String(a + b);
      break;
    case 2:
      randomSign = '-';
      correctAnswer = String(a - b);
      break;
    default:
      randomSign = '*';
      correctAnswer = String(a * b);
      break;
  }
  const question = `Question: ${a} ${randomSign} ${b}`;

  return cons(question, correctAnswer);
};
export default calculate;
