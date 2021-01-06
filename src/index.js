import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const userName = getUserName();

const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let count = 0; count < 3; count += 1) {
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const randomNumber = getRandom(1, 100);
    console.log(`Question: ${randomNumber}`);

    let correctAnswer;
    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else { correctAnswer = 'no'; }

    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
      if (count === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (answer !== 'yes' && answer !== 'no') {
      console.log(`Let's try again, ${userName}`);
      break;
    } else if (correctAnswer !== answer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};
export default isEven;
