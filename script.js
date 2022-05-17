'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclose = document.querySelector('.close-modal');
const btnopen = document.querySelectorAll('.show-modal');

//Function to close the model box

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Function to Open the Model Box
const openModal = function(){

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


//Loop for every button to open modal

for(let i = 0; i<btnopen.length; i++){

    btnopen[i].addEventListener('click', openModal);
}


//calling function to close modal and overlay

btnclose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);



//Close modal using specfic key press

document.addEventListener('keydown', function(e){
            
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){

        closeModal();  
    }
});