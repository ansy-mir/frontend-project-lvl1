import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const userName = getUserName();

const NOD = (a, b) => ((!b) ? a : NOD(b, a % b));

const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let count = 0; count < 3; count += 1) {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

    const a = getRandomNumber(1, 100);
    const b = getRandomNumber(1, 100);

    const result = NOD(a, b);

    console.log(`Question: ${a} ${b}`);

    const answer = +readlineSync.question('Your answer: ');

    if (result === answer) {
      console.log('Correct!');
      if (count === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (result !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};
export default gcd;
