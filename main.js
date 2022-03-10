const $input = document.querySelector('.inputguess')
const $try = document.querySelector('#trybutton')
const $answer = document.querySelector('.answer')
const $reset = document.querySelector('#resetbutton')

$try.addEventListener('click', clickExec)
$reset.addEventListener('click', resetGuess)

let secretValue = parseInt(Math.random() * 11)
let guessTries = 0

function clickExec(event) {
  event.preventDefault()
  let valueGuess = Number($input.value)
  console.log(secretValue)
  if (guessTries < 3) {
    if ((valueGuess && valueGuess <= 10) || valueGuess >= 0) {
      guessTries++
      guessItAll(valueGuess)
    } else {
      $answer.textContent = 'Favor insira um valor entre 0 e 10'
    }
  } else {
    $answer.textContent = 'Clique em NOVO NÚMERO para começar novamente'
  }
}
function guessItAll(value) {
  if (value == secretValue) {
    $answer.textContent = 'Parabéns, você acertou, o número era ' + secretValue
    guessTries = 3
  } else {
    let totalTry = 3
    totalTry = totalTry - guessTries
    if (value > secretValue) {
      $answer.textContent =
        'Você errou, o número inserido é maior que o número secreto, você ainda possui ' +
        totalTry +
        ' chances'
    } else if (value < secretValue) {
      $answer.textContent =
        'Você errou, o número inserido é menor que o número secreto ' +
        totalTry +
        ' chances'
    }
  }
}
function resetGuess(event) {
  event.preventDefault()
  secretValue = parseInt(Math.random() * 11)
  guessTries = 0
  console.log(guessTries)
}
