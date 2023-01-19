'use strict';

// console.log(document.querySelector('.message').textContent)
// 

// document.querySelector('.number').textContent = 10
// document.querySelector('.score').textContent = 13

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

const secretNumber = Math.trunc(Math.random() * 21)

let score = 20

document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function(){
    const guess = parseInt(document.querySelector('.guess').value)
    console.log(guess, typeof guess)
    
    if(!guess) {
        document.querySelector('.message').textContent = 'NO NUMBER!'
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'RIGHT!!!'
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'NUMBER TOO HIGH!'
            score--
            document.querySelector('.score').textContent = score  
        } else {
            document.querySelector('.message').innerHTML = 'YOU LOST THE GAME :(.'
            document.querySelector('.score') = 0
        }

    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'NUMBER TOO low!'
            score--
            document.querySelector('.score').textContent = score  
        } else {
            document.querySelector('.message').innerHTML = 'YOU LOST THE GAME :(.'
            document.querySelector('.score').textContent = 0
        }


    }
})

