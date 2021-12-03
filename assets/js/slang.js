const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const question = document.getElementById("question")

let currentQuestion = 0;
let score = 0;
 
let questions = [
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
 
restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);

function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    question.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    prevBtn.classList.add("hide");
 }
  
 beginQuiz();

 function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
 }

 function next() {
    currentQuestion++;
    if(currentQuestion >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    question.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    prevBtn.classList.remove("hide");
 }

 function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    nextBtn.classList.remove("hide");
 }

 function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");   
    question.innerHTML ="Congratulations on submitting the Quiz!"
 }