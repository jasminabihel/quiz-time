document.addEventListener("DOMContentLoaded", function () { })

const questions = [
    {
        question: "Who is the biggest boy band in the world right now?",
        answer1: "BTS",
        answer2: "One Direction",
        answer3: "NCT",
        answer4: "Beatles",
        correct: "answer1",
    },
    {
        question: "Which is the largest organ in the human body?",
        answer1: "Liver",
        answer2: "Lungs",
        answer3: "Heart",
        answer4: "Skin",
        correct: "answer4",
    },
    {
        question: "Which is the closest planet to Earth?",
        answer1: "Venus",
        answer2: "Jupiter",
        answer3: "Mars",
        answer4: "Mercury",
        correct: "answer4",

    },
    {
        question: "Who is the author of the book 'A Game of Thrones'?",
        answer1: "Neil Gaiman",
        answer2: "J.R.R. Tolkien",
        answer3: "George R.R. Martin",
        answer4: "J.K Rowling",
        correct: "answer3",

    }
]

let data = {
    score:0,
    questionNumber:-1,
}

function startGame() {
    document.getElementById("questionArea").classList.remove("hidden");
    document.getElementById("nav").classList.remove("hidden");

    document.getElementById("textIntro").classList.add("hidden");

    getNextQuestion(); 
}
 
function getNextQuestion() {
    data.questionNumber++;

    let q = questions[data.questionNumber];
    document.getElementById("question").innerText = q.question;
    document.getElementById("questionNumber").innerText = data.questionNumber + 1;

    const answerInputs = document.getElementById("answers").children;
    answerInputs[1].innerText = q.answer1;
    answerInputs[3].innerText = q.answer2;
    answerInputs[5].innerText = q.answer3;
    answerInputs[7].innerText = q.answer4;

    document.getElementById("answers").reset();
    enableDisableAnswers(false);
}

function checkAnswer(selectedAnswer) {
    let q = questions[data.questionNumber];
    if (q.correct === selectedAnswer) {
        data.score++;
        document.getElementById("rightAnswer").innerHTML="Correct";


    } else {
        document.getElementById("wrongAnswer").innerHTML="Sorry, you are not correct";
        
    }
    enableDisableAnswers(true);
}

function enableDisableAnswers(disable){
    let children = document.getElementById("answers").children;
    for (let i = 0; i < children.length; i++ ) {
        children[i].disabled = disable;
    }
}

function score() {
    document.getElementById("scores").classList.remove("hidden");
    document.getElementById("questionArea").classList.add("hidden");
    document.getElementById("nav").classList.add("hidden");
    document.getElementById("again").classList.remove("hidden");

    document.getElementById("score").innerText = data.score;
    
}