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

function chooseAnswer() {
    document.getElementsByClassName("choseAnswer")[0].innerHTML=type.choice;

}

function checkAnswer() {


}

function score() {
    console.log("scoreA")
}

let questions = [
    {
        question: "Who is the biggest boy band in the world right now?",
        answer1: "BTS",
        answer2: "One Direction",
        answer3: "NCT",
        answer4: "Beatles",
        correct: answer1,   
    },
    {
        question: "Which is the largest organ in the human body?",
        answer1: "Liver",
        answer2: "Lungs",
        answer3: "Heart",
        answer4: "Skin",
        correct: answer4,
    },
    { 
        question:"Which is the closest planet to Earth?",
        answer1: "Venus",
        answer2: "Jupiter",
        answer3: "Mars",
        answer4: "Mercury",
        correct: answer4, 

    },
    { 
        question:"Who is the author of the book 'A game of Thrones'?",
        answer1: "Neil Gaiman",
        answer2: "J.R.R. Tolkien",
        answer3: "George R.R. Martin",
        answer4: "J.K Rowling",
        correct: answer3, 

    }
]