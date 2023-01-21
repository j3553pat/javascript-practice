'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')
console.log(btnsOpenModal)


const openModal = function () {
    modal.classList.remove('hidden')
    modal.classList.remove('hidden')
}

const closeModal =  function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

for(let i = 0; i < btnsOpenModal.length; i++) 
btnsOpenModal[i].addEventListener('click', openModal);

document.addEventListener('keydown', function(event) {
    console.log(event.key)
if(event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
})