console.clear();

/* Dark Mode */

const bodyElement = document.querySelector('[data-js="body"]')
const toggleButton = document.querySelector ('[data-js="toggle-button"]')

/*
toggleButton.addEventListener("click", (e)=> {
    bodyElement.classList.toggle("dark");
})

*/


/* Show Answer*/

const showAnswerButton = document.querySelector('[data-js="show_answer"]')
const displayAnswer = document.querySelector('[data-js="answer"]')


showAnswerButton.addEventListener("click", (e)=> {
    displayAnswer.toggleAttribute("hidden");
    if (displayAnswer.hidden){
        showAnswerButton.textContent="Show Answer"
    } else {
        showAnswerButton.textContent="Hide Answer"
    }

})


