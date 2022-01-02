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
		question: "What is the national annimal of Scotland?",
		answers: [
			{text: 'Unicorn', correct: true},
			{text: 'Seahorse', correct: false},
			{text: 'Eagle', correct: false},
            {text: 'Rabbit', correct: false},
		],
	},

    {
		question: "What is the most popular soft drink in Scotland?",
		answers: [
			{text: 'Cream Soda', correct: false},
			{text: 'Coca Cola', correct: false},
			{text: 'Red Bull', correct: false},
            {text: 'Irn Bru', correct: true},
		],
	},

    {
		question: "What is the name of the famous Scottish pattern?",
		answers: [
			{text: 'Plaid', correct: false},
			{text: 'Tartan', correct: true},
			{text: 'Gingham', correct: false},
            {text: 'Madras', correct: false},
		],
	},

    {
		question: "What is haggis made of?",
		answers: [
			{text: 'pork and oatmeal', correct: false},
			{text: 'Potatoes and mince', correct: false},
			{text: 'Sheep offal', correct: true},
            {text: 'Cow brains', correct: false},
		],
	},

    {
		question: "What 3 languages are recognised officially in Scotland?",
		answers: [
			{text: 'English, Polish and Gaelic', correct: false},
			{text: 'English, Gaelic and Scots', correct: true},
			{text: 'Scots, Gaelic and French', correct: false},
            {text: 'Polish, French and Scots', correct: false},
		],
	},

    {
		question: "What is the nickname of the Loch Ness Monster?",
		answers: [
			{text: 'Lochie', correct: false},
			{text: 'Bonnie Lady', correct: false},
			{text: 'Nessie', correct: true},
            {text: 'Monster Chops', correct: false},
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