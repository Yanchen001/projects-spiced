const bodyElement = document.querySelector('[data-js="body"]')
const toggleButton = document.querySelector ('[data-js="toggle-button"]')


toggleButton.addEventListener("click", (e)=> {
    bodyElement.classList.toggle("dark");
})