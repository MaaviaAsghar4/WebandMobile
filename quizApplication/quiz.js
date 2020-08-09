var quesCount = 0;
var score = 0;

function play() {
    var home = document.getElementById("home");
    home.classList.add("fadeOut")
    var game = document.getElementById("game");
    game.classList.remove("fadeOut");
    game.classList.add("fadeIn");
}

var questions = [
    {
        question: "Which is the most popular programming language to develop mobile apps?",
        answer: "Java",
        options: [
            "JavaScript",
            "Java",
            "Python",
            "none of the above"
        ]
    }, {
        question: "What JavaScript Framework has been most used for developing mobile apps?",
        answer: "React",
        options: [
            "React",
            "Angular",
            "Vue",
            "none of the above"
        ]
    }, {
        question: "________ is used to style the websites ?",
        answer: "CSS",
        options: [
            "HTML",
            "CSS",
            "Python",
            "none of the above"
        ]
    }, {
        question: "The programming language used by FLutter framework is?",
        answer: "Dart",
        options: [
            "JavaScript",
            "Dart",
            "Python",
            "none of the above"
        ]
    }, {
        question: "Among these languages which one is famous for artificial intelligence and machine learning?",
        answer: "Python",
        options: [
            "JavaScript",
            "Java",
            "Python",
            "none of the above"
        ]
    }
];

function displayQuestion(e) {
    // Displaying question
    // var next = document.getElementById("next");
    // next.classList.remove("fadeOut");
    var quesElement = document.getElementById("question");
    quesElement.innerHTML = questions[e].question;

    // Displaying Options
    var dispOption = document.getElementsByClassName("choice-text");
    for (var i=0; i < questions.length; i++) {
        dispOption[i].innerHTML = questions[e].options[i];
    }
}

function nextQues() {
    validate(quesCount);
    quesCount++;
    removeActive();
    displayQuestion(quesCount);
}

function classActive(e) {
    removeActive();
    e.classList.add("active");
}

function removeActive() {
    var active = document.getElementsByClassName("active");
    for (var i=0; i<active.length; i++) {
        active[i].classList.remove("active")
    }
}

function validate(e) {
    var active = document.getElementsByClassName("active");
    if(active[0].innerHTML == questions[e].answer){
        score++;
        console.log(score);
    }

    if (quesCount === 4) {

        var game = document.getElementById("game");
        var result = document.createElement("button");
        result.setAttribute("class", "btn");
        result.setAttribute("onclick", "result(this)");
        var textNode = document.createTextNode("Result");
        result.appendChild(textNode);
        game.appendChild(result);
        var next = document.getElementById("next");
        next.classList.add("fadeOut");
        var game2 = document.getElementById("game2");
        game2.classList.remove("fadeIn");
        game2.classList.add("fadeOut");
    }
}

function result(e) {
    var game = document.getElementById("game");
    game.classList.remove("fadeIn");
    game.classList.add("fadeOut");

    var result = document.getElementById("result");
    result.classList.remove("fadeOut");
    result.classList.add("fadeIn");

    var home = document.getElementById("home");
    home.classList.add("fadeOut");
    home.classList.remove("fadeIn");

    var gaming = document.getElementById("gaming");
    gaming.innerHTML = "Your total score is " + score;
}

function playAgain () {
    location.reload();

}