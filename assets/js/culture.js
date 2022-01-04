const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
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

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
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
    question: "What is the national annimal of Scotland?",
    answers: [
      { text: 'Unicorn', correct: true },
      { text: 'Seahorse', correct: false },
      { text: 'Eagle', correct: false },
      { text: 'Rabbit', correct: false },
    ],
  },

  {
    question: "What is the most popular soft drink in Scotland?",
    answers: [
      { text: 'Cream Soda', correct: false },
      { text: 'Coca Cola', correct: false },
      { text: 'Red Bull', correct: false },
      { text: 'Irn Bru', correct: true },
    ],
  },

  {
    question: "What is the name of the famous Scottish pattern?",
    answers: [
      { text: 'Plaid', correct: false },
      { text: 'Tartan', correct: true },
      { text: 'Gingham', correct: false },
      { text: 'Madras', correct: false },
    ],
  },

  {
    question: "What is haggis made of?",
    answers: [
      { text: 'Pork and oatmeal', correct: false },
      { text: 'Potatoes and mince', correct: false },
      { text: 'Sheep offal', correct: true },
      { text: 'Cow brains', correct: false },
    ],
  },

  {
    question: "What 3 languages are recognised officially in Scotland?",
    answers: [
      { text: 'English, Polish and Gaelic', correct: false },
      { text: 'English, Gaelic and Scots', correct: true },
      { text: 'Scots, Gaelic and French', correct: false },
      { text: 'Polish, French and Scots', correct: false },
    ],
  },

  {
    question: "What is the nickname of the Loch Ness Monster?",
    answers: [
      { text: 'Lochie', correct: false },
      { text: 'Bonnie Lady', correct: false },
      { text: 'Nessie', correct: true },
      { text: 'Monster Chops', correct: false },
    ],
  },
]