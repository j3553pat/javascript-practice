'use strict';

let secretNumber = Math.trunc(Math.random() * 21)
let score = 20
let highScore = 0


document.querySelector('.again').addEventListener('click', function(){
    score = 20
    secretNumber = Math.trunc(Math.random() * 21)
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value =''
    document.querySelector('body').style.backgroundColor ='#222'
    document.querySelector('.number').style.width = '15rem'
})

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = parseInt(document.querySelector('.guess').value)
    console.log(guess, typeof guess)
    

//No INPUT
    if(!guess) {
        // document.querySelector('.message').textContent = 'NO NUMBER!'
        displayMessage('NO NUMBER!')
        //when player wins
    } else if (guess === secretNumber) {
        displayMessage('RIGHT!!!')
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = 'blue'
        document.querySelector('.number').style.width = '30rem'

        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = score
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'NUMBER TOO HIGH!' : document.querySelector('.message').textContent = 'NUMBER TOO low!'
            
            score--
            document.querySelector('.score').textContent = score 
        } else {
            document.querySelector('.message').innerHTML = 'YOU LOST THE GAME :(.'
            document.querySelector('.score') = 0
        }
    }
})
