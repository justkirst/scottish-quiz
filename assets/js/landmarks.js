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
	