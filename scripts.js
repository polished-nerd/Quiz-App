const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState () {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
 } 


 function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerHTML = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) { 
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What in the world?', 
        answers: [
            { text: 'yes', correct: true},
            { text: 'no', correct: false },
            { text: 'fuck you', correct: false },
            { text: 'go away', correct: false },
        ]
    },
    {
        question: 'What it do?',
        answers: [
            { text: 'yes', correct: true},
            { text: 'no', correct: false },
            { text: 'fuck you', correct: false },
            { text: 'go away', correct: false },
        ]
    },
    {
        question: 'How it be?',
        answers: [
            { text: 'yes', correct: true},
            { text: 'no', correct: false },
            { text: 'fuck you', correct: false },
            { text: 'go away', correct: false },
        ]
    },
    {
        question: 'What in the world?',
        answers: [
            { text: 'yes', correct: true},
            { text: 'no', correct: false },
            { text: 'fuck you', correct: false },
            { text: 'go away', correct: false },
        ]
    },
    {
        question: 'What in the world?',
        answers: [
            { text: 'yes', correct: true},
            { text: 'no', correct: false },
            { text: 'fuck you', correct: false },
            { text: 'go away', correct: false },
        ]
    },
]