//Here we have the navbar JS
let link2 = document.getElementById('link2');
let otter = document.getElementById('otter');

function animation() {
    otter.classList.add('fa-bounce');
}

function no_animation() {
    otter.classList.remove('fa-bounce');
}

link2.addEventListener('mouseenter', animation);
link2.addEventListener('mouseleave', no_animation);
//Navbar JS ends here

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
    
        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];
    
            // for each available answer to this question...
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" id="joku" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }
    function showResults(questions, quizContainer, resultsContainer){
	
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
               
                
                
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
                
                
                
            }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ". Oikeat vastaukset olivat c ,a ,b ,b ,c";
        
        
    
         
    }
	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){

		showResults(questions, quizContainer, resultsContainer);
        submitButton.disabled = true
	}
}
var myQuestions = [
	{
		question: "Missä Pandat nukkuvat?",
		answers: {
			a: 'Kuussa',
			b: 'Sängyssä',
			c: 'Missä vaan'
		},
		correctAnswer: 'c'
	},
    {
		question: "Miten seeprat juttelevat toisilleen?",
		answers: {
			a: 'Korvia liikuttelemalla',
			b: 'Puhumalla',
			c: 'Murjottamallla'
		},
		correctAnswer: 'a'
	},
    {
		question: "Kuinka monta tuntia leijonauros nukkuu päivässä?",
		answers: {
			a: 'Liika monta',
			b: '20 tuntia',
			c: 'Niin monta kun naarasleijona antaa'
		},
		correctAnswer: 'b'
	},
    {
		question: "Minkävärinen on Elefantti?",
		answers: {
			a: 'Vihreä',
			b: 'Harmaa',
			c: 'Violetti'
		},
		correctAnswer: 'b'
	},
	{
		question: "Mitä tulee kun yhdistää lohen ja käärmeen?",
		answers: {
			a: 'Hassu soppa',
			b: 'Jonkinsortin avaruusolio',
			c: 'Lohikäärme'
		},
		correctAnswer: 'c'
	}
    
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
