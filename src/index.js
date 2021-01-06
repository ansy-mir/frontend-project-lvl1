import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const userName = getUserName();

const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let count = 0; count < 3; count += 1) {
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const randomNumber = getRandom(1, 100);
    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      if (count === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (randomNumber % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      if (count === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (randomNumber % 2 === 0 && answer === 'no') {
      console.log('"no" is wrong answer ;(. Correct answer was "yes"');
      console.log(`Let's try again, ${userName}`);
      break;
    } else if (randomNumber % 2 !== 0 && answer === 'yes') {
      console.log('"yes" is wrong answer ;(. Correct answer was "no"');
      console.log(`Let's try again, ${userName}`);
      break;
    } else {
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }
};
export default isEven;
