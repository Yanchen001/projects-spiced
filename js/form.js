const form = document.querySelector('[data-js="form"]')

form.addEventListener("submit",(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data)



    const inputQuestion = e.target.elements.form_question.value
    const inputAnswer = e.target.elements.form_answer.value
    const inputTag = e.target.elements.form_tag.value

    
    //console.log(userQuestion)
    
    //cardContainer.append(inputQuestion,inputAnswer,inputTag)
    
    console.log(inputQuestion)
   newCard(inputQuestion, inputAnswer, inputTag)
   
})
function newCard(question, answer, tag){
    const cardContainer = document.querySelector('[data-js="cardContainer"]')
    const section = document.createElement("section")
    section.classList.add("question_card")
    const createdQ = createQuestion(question)
    const createdA = createAnswer(answer)
    const createdT = createTag(tag)
    section.append(createdQ, createdA, createdT)
    cardContainer.append(section)
}
function createQuestion(question){
    const questionElement = document.createElement("p")
    questionElement.classList.add("question-text")
    questionElement.textContent=question
    return questionElement
}

function createAnswer(answer){

    const answerElement = document.createElement("p")
    answerElement.classList.add("answer")
    answerElement.textContent=answer
    return answerElement
}
function createTag(tag){
    const tagGroup = document.createElement("ul")
    const tagElement = document.createElement("li")
    tagElement.classList.add("category_item")
    tagGroup.classList.add("category_list")

    tagElement.textContent=tag
    tagGroup.append(tagElement)
    return tagGroup
}

