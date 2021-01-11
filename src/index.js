import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const playGame = (game, taskDescription) => {
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();
  console.log(`${taskDescription}`);

  for (let count = 0; count < 3; count += 1) {
    const pairExcersise = game();
    const correctAnswer = cdr(pairExcersise);
    const question = car(pairExcersise);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
      if (count === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};
export default playGame;
