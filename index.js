// creating function to randomly choose an option for pc
const pcChoice = () => {
  const options = ['rock', 'paper', 'scissors']

  return options[Math.floor(Math.random() * 3)]
}
const showResult = (humanChoice, ss, result) => {
  const resultShow = document.querySelector('.result')
  const yourChoice = document.querySelector('.yourChoic')
  const pcChoice = document.querySelector('.pcChoic')
  const finalResult = document.querySelector('.finalResult')
  resultShow.style.visibility = 'visible'
  console.log(resultShow.style.visibility)
  yourChoice.innerHTML = humanChoice
  pcChoice.innerHTML = ss
  finalResult.innerHTML = result
}
const play = (option) => {
  const human = option
  const pc = pcChoice()
  let result

  pc === human
    ? (result = 'drow')
    : pc == 'rock' && human == 'scissors'
    ? (console.log('you lost'), (result = 'you lost'))
    : pc == 'rock' && human == 'paper'
    ? (result = 'you win')
    : pc == 'scissors' && human == 'rock'
    ? (result = 'you win')
    : pc == 'scissors' && human == 'paper'
    ? (result = 'you lost')
    : pc == 'paper' && human == 'scissors'
    ? (result = 'you win')
    : pc == 'paper' && human == 'rock'
    ? (result = 'you win')
    : (result = 'somthing went wrong')
  showResult(human, pc, result)
}

const choice = document.querySelector('.options')
choice.addEventListener('click', (event) => {
  let target = event.target
  let option = target.innerHTML
  switch (target.getAttribute('class')) {
    case 'option rock':
      play(option)
      break
    case 'option papaer':
      play(option)
      break
    case 'option scissors':
      play(option)
      break
  }
})
