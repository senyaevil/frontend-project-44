import getRandomNumber from '../utils.js'
import runEngine from '../index.js'

const findGcd = (a, b) => {
    if (b === 0) {
        return a
    }
    return findGcd(b, a % b)
}

const generateRound = () => {
    const num1 = getRandomNumber(1, 50)
    const num2 = getRandomNumber(1, 50)
    const question = `${num1} ${num2}`
    const correctAnswer = String(findGcd(num1, num2))

    return [question, correctAnswer]
}

const runGcdGame = () => {
    const rules = 'Find the greatest common divisor of given numbers.'
    runEngine(rules, generateRound)
}

export default runGcdGame