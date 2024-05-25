// creating function to randomly choose an option
const pcChoice = () => {
  const options = ['rock', 'paper', 'scissors']

  return options[Math.floor(Math.random() * 3)]
}
// creating function to let human make an option

const getHumanChoice = () => {
  const choose = prompt(`please choose an option
    -1 rock
    -2 paper
    -3 scissors`)
  return choose == 'rock' || choose == 'paper' || choose == 'scissors'
    ? choose
    : (alert('please enter a valid input'), getHumanChoice())
}

const play = () => {
  const human = getHumanChoice()
  const pc = pcChoice()
  pc === human
    ? console.log('draw')
    : pc == 'rock' && human == 'scissors'
    ? console.log('you lost')
    : pc == 'rock' && human == 'paper'
    ? console.log('you win')
    : pc == 'scissors' && human == 'rock'
    ? console.log('you win')
    : pc == 'scissors' && human == 'paper'
    ? console.log('you lost')
    : pc == 'paper' && human == 'scissors'
    ? console.log('you win')
    : pc == 'paper' && human == 'rock'
    ? console.log('you win')
    : console.log('somthing went wrong')
}
