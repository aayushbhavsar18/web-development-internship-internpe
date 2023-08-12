const questions = [
    {
    question: 'What does HTML stand for ?',
    answers : [
        {text : 'Hyperlinks and Text Markup Language', correct : false},
        {text : 'Home Tool Markup Language', correct : false},
        {text : 'Hyper Text Markup Language', correct : true},
        {text : 'Hyperlinks Text Markup Language', correct : false}
    ]
},

{
    question: 'Who is the father of HTML ?',
    answers : [
        {text : 'Rasmus Lerdorf', correct : false},
        {text : 'Tim Berners-Lee', correct : true},
        {text : 'Brendan Eich', correct : false},
        {text : 'Sergey Brin', correct : false}
    ]
},

{
    question: 'Which is The correct sequence of HTML tags for starting a webpage is ?',
    answers : [
        {text : 'Head, Title, HTML, body', correct : false},
        {text : 'HTML, Head, Title, Body', correct : true},
        {text : 'HTML, Body, Title, Head', correct : false},
        {text : 'HTML, Head, Body, Title', correct : false}
    ]
},

{
    question: 'Which of the following is used to read an HTML page and render it?',
    answers : [
        {text : 'Web browser', correct : true},
        {text : 'Web server', correct : false},
        {text : 'Web network', correct : false},
        {text : 'Web matrix', correct : false}
    ]
},

{
    question: 'What does CSS stands for ?',
    answers : [
        {text : 'Color Style Sheets', correct : false},
        {text : 'Cascade Sheets Style', correct : false},
        {text : 'Cascade Style Sheet', correct : false},
        {text : ' Cascading Style Sheets', correct : true}
    ]
    
},

{
    question: ' Which of the following CSS selectors are used to specify a group of elements ?',
    answers : [
        {text : 'class', correct : true},
        {text : 'id', correct : false},
        {text : 'tag', correct : false},
        {text : 'both class and tag', correct : false}
    ]
},

{
    question: 'Which of the following CSS property sets the font size of text',
    answers : [
        {text : ' font-size', correct : true},
        {text : 'text-size', correct : false},
        {text : ' text', correct : false},
        {text : 'size', correct : false}
    ]
},

{
    question: 'Which type of JavaScript language is ?',
    answers : [
        {text : ' Object-Oriented', correct : false},
        {text : 'Object-Based', correct : true},
        {text : ' Assembly-language', correct : false},
        {text : 'High-level', correct : false}
    ]
},

{
    question: 'Which of the following keywords is used to define a variable in Javascript ?',
    answers : [
        {text : 'var', correct : false},
        {text : 'let', correct : false},
        {text : 'Both var and let', correct : true},
        {text : 'None of the above', correct : false}
    ]
},

{
    question: 'Where is the correct place to insert a script src = "" tag ?',
    answers : [
        {text : 'Inside body section before the body tag is closed', correct : true},
        {text : 'Both the head section and the body section', correct : false},
        {text : 'The head section', correct : false},
        {text : 'The title section', correct : false}
    ]
},


];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


 currentQuestion.answers.forEach(answer => {
    const button =  document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn")
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
    
});
};
//remove the answers-buttons previous
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");
        }
        button.disabled = true
    });
    nextButton.style.display="block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display="block"
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore()
    }
}


nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();