import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

const userName = getUserName();

const calculate = () => {
  console.log('What is the result of the expression?');

  for (let count = 0; count < 3; count += 1) {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

    const a = getRandomNumber(1, 100);
    const b = getRandomNumber(1, 100);
    let result;
    const randomNumberForSign = getRandomNumber(1, 3);
    let randomSign;
    switch (randomNumberForSign) {
      case 1:
        randomSign = '+';
        result = a + b;
        break;
      case 2:
        randomSign = '-';
        result = a - b;
        break;
      default:
        randomSign = '*';
        result = a * b;
        break;
    }
    console.log(`Question: ${a} ${randomSign} ${b}`);

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
export default calculate;
