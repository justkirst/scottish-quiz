const slangQuestions = [
	{
		question: "What does Whit’s fur ye’ll no go by ye! mean?",
		answers: {
			a: 'What is meant to be will be',
			b: 'You will go far',
			c: 'You will not go far when you are out',
            d: 'What is meant to happen will happen'
		},
		correctAnswer: 'd'
	},

    {
		question: "What does Skinny Malinky Longlegs! mean ?",
		answers: {
			a: 'You need to eat as you are to thin',
			b: 'You are short and skinny',
			c: 'A tall thin person',
            d: 'You have long thin legs'
		},
		correctAnswer: 'c'
	},

    {
		question: "What does Dinnae teach yer Granny tae suck eggs! mean?",
		answers: {
			a: 'I will teach you how to cook eggs correctly',
			b: 'Do not try to teach someone something they already know',
			c: 'Your Grandmother cooks the best eggs',
            d: 'You need to teach your Gran to eat eggs properly'
		},
		correctAnswer: 'b'
	},

    {
		question: "What does Haud yer wheesht! mean?",
		answers: {
			a: 'Be quiet',
			b: 'Be loud',
			c: 'Hold your stomach and shout loudly',
            d: 'Hold your head up high'
		},
		correctAnswer: 'a'
	},

    {
		question: "What does Gie it laldy mean?",
		answers: {
			a: 'He or she is running fast are they not',
			b: 'You keep dancing like nobody is watching you',
			c: 'That is my boy',
            d: 'Do something with gusto'
		},
		correctAnswer: 'd'
	},

    {
		question: "What does It’s a dreich day! mean?",
		answers: {
			a: 'It is a cold and miserable day',
			b: 'It is going to be the hottest day today',
			c: 'It is very icy today',
            d: 'It is a very sunny day'
		},
		correctAnswer: 'a'
	},

];

var quizContainer = document.getElementById('quiz');
var resultContainer = document.getElementById('results');
var submitQuizButton = document.getElementById('submit');

generateQuiz(slangQuestions, quizContainer, resultContainer, submitQuizButton);

function generateQuiz(quizContainer, resultContainer, submitQuizButton) {

function showQuestions (questions, quizContainer) {
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
        answers = [];
    
        for(letter in questions[i].answers){
            if (questions.hasOwnProperty(i)){
                answers.push(
                    '<input type="radio" id="'+ questions[i].answers[letter] +'" name="question'+i+'" value="'+letter+'">' + '<label  for="'+ questions[i].answers[letter] +'">'+ questions[i].answers[letter] +'</label>'
                );
        }
}

output.push(
    '<div class="question">' + questions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
);
}
quizContainer.innerHTML = output.join('');
}

showQuestions(questions, quizContainer);

function showResults(results, quizContainer) {
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    var numberCorrect = 0;

    for(var i=0; i<questions.length; i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userAnswer===questions[i].correctAnswer){
            numberCorrect++;
            answerContainers[i].style.color = rgb(242,5,5);
        } else{
                answerContainers[i].style.color = rgb(2,89,57);
        }
    }        
    resultContainer.innerHTML = numberCorrect + ' out of ' + questions.length;
}

submitButton.onclick = function(){
	showResults(questions, quizContainer, resultContainer);
}