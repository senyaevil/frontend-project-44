import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  
  if (number === 2) {
    return true;
  }
  
  if (number % 2 === 0) {
    return false;
  }
  
  const limit = Math.sqrt(number);
  for (let i = 3; i <= limit; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(rules, generateRound);
};

export default runPrimeGame;