const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text")

let currentQuestion = 0;
let score = 0;
 
let questions = [

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

restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);

function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    btn.innerHTML = questions[currentQuestion].answers[0].option;
    btn.onclick = () => {
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
    questionText.innerHTML ="Congratulations on submitting the Quiz!"
 }