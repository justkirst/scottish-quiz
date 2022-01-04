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
        question: "What does Whit’s fur ye’ll no go by ye! mean?",
        answers: [
            {text: 'What is meant to be will be', correct: false},
            {text: 'You will go far', correct: false},
            {text: 'You will not go far when you are out', correct: false},
            {text: 'What is meant to happen will happen', correct: true},
        ]
    },


    {
		question: "What does Skinny Malinky Longlegs! mean?",
		answers: [
			{text: 'You need to eat as you are to thin', correct: false},
			{text: 'You are short and skinny', correct: false},
			{text: 'A tall thin person', correct: true},
            {text: 'You have long thin legs', correct: false},
		]
	},

    {
		question: "What does Dinnae teach yer Granny tae suck eggs! mean?",
		answers: [
			{text: 'I will teach you how to cook eggs', correct: false},
			{text: 'Do not try to teach someone something they already know', correct: true},
			{text: 'Your Grandmother cooks the best eggs', correct: false},
            {text: 'You need to teach your Gran to eat eggs properly', correct: false},
		]
	},

    {
		question: "What does Haud yer wheesht! mean?",
		answers: [
			{text: 'Be quiet!', correct: true},
			{text: 'Be loud', correct: false},
			{text: 'Hold your stomach and shout loudly', correct: false},
            {text: 'Hold your head up high', correct: false},
		]
	},

    {
		question: "What does Gie it laldy mean?",
		answers: [
			{text: 'That person is running very fast', correct: false},
			{text: 'You keep dancing like nobody is watching you', correct: false},
			{text: 'That is my boy', correct: false},
            {text: 'Do something with gusto', correct: true},
		]
	},

    {
		question: "What does It’s a dreich day! mean?",
		answers: [
			{text: 'It is a cold and miserable day', correct: true},
			{text: 'It is going to be the hottest day today', correct: false},
			{text: 'It is very icy today', correct: false},
            {text: 'It is a very sunny day', correct: false},
		]
	},
];
 
