import getRandomNumber from '../utils.js'
import runEngine from '../index.js'

const isEven = number => number % 2 === 0

const generateRound = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

const runEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".'
  runEngine(rules, generateRound)
}

export default runEvenGame
