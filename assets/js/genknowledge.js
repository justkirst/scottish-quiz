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
		question: "What sport was invented in Scotland?",
		answers: [
			{text: 'Netball', correct: false},
			{text: 'Snooker', correct: false},
			{text: 'Curling', correct: false},
          {text: 'Golf', correct: true},
		],
	},

    {
		question: "What colours are on the Scottish flag?",
		answers: [
			{text: 'Purple and blue', correct: false},
			{text: 'Red and white', correct: false},
			{text: 'Red, green and blue', correct: false},
            {text: 'Blue and white', correct: true},
		],
	},

    {
		question: "How many Scottish counties are they?",
		answers: [
			{text: '22', correct: false},
			{text: '33', correct: true},
			{text: '50', correct: false},
            {text: '6', correct: false},
		],
	},

    {
		question: "What is the name of the Scottish flag?",
		answers: [
			{text: 'The Saltire', correct: true},
			{text: 'The Tricolour', correct: false},
			{text: 'The Red Dragon', correct: false},
            {text: 'The Estelada', correct: false},
		],
	},

    {
		question: "Who is the national poet of Scotland?",
		answers: [
			{text: 'Walter Scott', correct: false},
			{text: 'Robert Burns', correct: true},
			{text: 'Robert Louis Stevenson', correct: false},
            {text: 'Norman MacCaig', correct: false},
		],
	},

    {
		question: "The Gaelic for whisky is Uisge Beatha. What is its literal meaning of this?",
		answers: [
			{text: 'Water of Life', correct: true},
			{text: 'Spirit of Scotland', correct: false},
			{text: 'Medicine for the heart', correct: false},
            {text: 'Heart-warming liquid', correct: false},
		],
	},

];