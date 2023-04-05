document.addEventListener("DOMContentLoaded", function () {})

let data ={
    score:0,
    questionNumber:0,
};

function startGame() {
    document.getElementById("questionArea").style.display="block";
    document.getElementsByClassName("navigate")[0].style.display="block";
    document.getElementById("textIntro").style.display="none";
    getNextQuestion();
}

function getNextQuestion() {
    let q = questions[data.questionNumber];
    document.getElementById("question").innerText=q.question;
    
    data.questionNumber++;
    document.getElementById("questionNumber").innerText=data.questionNumber;


}

function getPreviousQuestion() {
    data.questionNumber--;
    document.getElementById("questionNumber").innerText=data.questionNumber;

}
function chooseAnswer() {

}

function checkAnswer() {

}

function score() {
    console.log("scoreA")
}

let questions = [
    {
        question: "en grym fråga",
        answer1: "asd",
        answer2: "asd",
        answer3: "asd",
        answer4: "asd",
        correct: 3    
    },
    {
        question: "en annan grym fråga",
        answer1: "asd",
        answer2: "asd",
        answer3: "asd",
        answer4: "asd",
        correct: 1    
    }
]