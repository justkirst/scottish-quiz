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