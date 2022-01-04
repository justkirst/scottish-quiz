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



const questions = [

	{
		question: "Who is this comic book character that is located in Dundee?",
        answers: [
			{text: 'Dennis the Menace', correct: false},
			{text: 'Desperate Dan', correct: true},
			{text: 'Ivy the Terrible', correct: false},
            {text: 'Calamity James', correct: false},
                img.src = '/assets/images/desperate-dan.jpeg'
        ],
            },

	{
		question: "What is this landmark?",
		answers: [
            {text: 'Loch Ness', correct: false},
			{text: 'Staffa', correct: false},
			{text: 'Beinn Eighe', correct: false},
            {text: 'Falkirk Wheel', correct: true},
            img: '/images/falkirk-wheel.jpeg'

        ],
    },

    {
        question: "Who is this cute little doggie called?",
        answers: [
           {text: 'Greyfriars Bobby', correct: true},
            {text: 'Dawg', correct: false},
           {text: 'Archie', correct: false},
        {text: 'Whisky', correct: false},
        img: '/images/greyfriars-bobby.jpeg'
        ],  
    },

    {
        question: "This train was made famous in Harry Potter, but, what is its real name?",
        answers: [
            {text: 'Strathspey Steam Railway', correct: false},
            {text: 'Hogwarts Express', correct: false},
            {text: 'Glenfinnan Viaduct', correct: true},
            {text: 'Cairngorm Mountain Railway', correct: false},
        img: '/images/glennfinnan-viaduct.jpeg'
        ],
    },

    {
        question: "What castle is this?",
        answers: [
           {text: 'Stirling Castle', correct: false},
           {text: 'Edinburgh Castle', correct: true},
            {text: 'Eilean Donan Castle', correct: false},
            {text: 'Glamis Castle', correct: false},
        img: '/images/edinburgh-castle.jpeg'
        ],
    },

    {
        question: "What's the name of this horse statue?",
        answers: [
            {text: 'Unicorn Clan', correct: false},
            {text: 'Still Water Horse Head Statue', correct: false},
            {text: 'The Kelpies', correct: true},
            {text: 'The Horses of Helios', correct: false},
        img: '/images/kelpies.jpeg'
        ],   
    },
];