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
		question: "Which Scottish Actor played James Bond?",
		answers: [
			{text: 'Roger Moore', correct: false},
			{text: 'Daniel Craig', correct: false},
			{text: 'Sean Connery', correct: true},
            {text: 'Pierce Brosnan', correct: false},
		],
	},

    {
		question: "Which famous British chef was born in Johnstone, Scotland?",
		answers: [
			{text: 'Gordon Ramsey', correct: true},
			{text: 'Jamie Oliver', correct: false},
			{text: 'Rick Stein', correct: false},
            {text: 'Heston Blumenthal', correct: false},
		],
	},

    {
		question: "Which Scottish group wrote Flower of Scotland?",
		answers: [
			{text: 'The Proclaimers', correct: false},
			{text: 'The Corries', correct: true},
			{text: 'Runrig', correct: false},
            {text: 'The Vaselines', correct: false},
		],
	},

    {
		question: "Which Outlander star is the only one to speak Gaelic?",
		answers: [
			{text: 'Duncan Lacroix - Murtagh', correct: false},
			{text: 'Graham McTavish - Dougal', correct: false},
			{text: 'Sam Heughan - Jamie', correct: false},
           {text: 'Caitriona Balfe - Claire', correct: true},
		],
	},

    {
		question: "What is the name of real-life Hogwarts Express?",
		answers: [
			{text: 'West Highland Line', correct: false},
			{text: 'Glenfinnan Viaduct', correct: true},
			{text: 'Cairngorm Mountain Railway', correct: false},
            {text: 'The Far North Line', correct: false},
		],
	},

    {
		question: "On which Scottish Island did George Orwell write 1984?",
		answers: [
			{text: 'Isle of Skye', correct: false},
			{text: 'Shetland', correct: false},
			{text: 'Isle of Jura', correct: true},
            {text: 'Arran', correct: false},
		],
	},

];
