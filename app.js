// JAVASCRIPT

//    QUIZ QUESTIONS


const quizData = {

    //   HTML QUESTIONS


    html: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Home Tool Markup Language",
                "Hyperlink Text Management Language"
            ],
            answer: 0
        },

        {
            question: "Which tag is used for the largest heading?",
            options: [
                "<h1>",
                "<h6>",
                "<heading>",
                "<head>"
            ],
            answer: 0
        },

        {
            question: "Which tag is used to create a paragraph?",
            options: [
                "<p>",
                "<para>",
                "<text>",
                "<paragraph>"
            ],
            answer: 0
        },

        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: [
                "<link>",
                "<a>",
                "<href>",
                "<url>"
            ],
            answer: 1
        },

        {
            question: "Which tag is used to display an image?",
            options: [
                "<image>",
                "<img>",
                "<picture>",
                "<src>"
            ],
            answer: 1
        },

        {
            question: "Which tag creates an ordered list?",
            options: [
                "<ul>",
                "<ol>",
                "<li>",
                "<list>"
            ],
            answer: 1
        },

        {
            question: "Which tag is used for a line break?",
            options: [
                "<break>",
                "<lb>",
                "<br>",
                "<line>"
            ],
            answer: 2
        },

        {
            question: "Which tag is used to create a form?",
            options: [
                "<input>",
                "<form>",
                "<data>",
                "<fieldset>"
            ],
            answer: 1
        },

        {
            question: "Which tag defines a table row?",
            options: [
                "<td>",
                "<th>",
                "<tr>",
                "<row>"
            ],
            answer: 2
        },

        {
            question: "What is the standard extension of an HTML file?",
            options: [
                ".css",
                ".js",
                ".html",
                ".web"
            ],
            answer: 2
        }
    ],


    //    CSS QUESTIONS


    css: [
        {
            question: "What does CSS stand for?",
            options: [
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Creative Style System",
                "Colorful Style Sheets"
            ],
            answer: 0
        },

        {
            question: "Which CSS property changes text color?",
            options: [
                "font-color",
                "color",
                "text-color",
                "foreground"
            ],
            answer: 1
        },

        {
            question: "Which property changes background color?",
            options: [
                "bgcolor",
                "background-color",
                "color-background",
                "background-style"
            ],
            answer: 1
        },

        {
            question: "Which property changes the font size?",
            options: [
                "font-size",
                "text-size",
                "size",
                "font-height"
            ],
            answer: 0
        },

        {
            question: "Which property adds space inside an element?",
            options: [
                "margin",
                "padding",
                "spacing",
                "border"
            ],
            answer: 1
        },

        {
            question: "Which property adds space outside an element?",
            options: [
                "padding",
                "margin",
                "spacing",
                "outside"
            ],
            answer: 1
        },

        {
            question: "Which value enables Flexbox?",
            options: [
                "display: block",
                "display: grid",
                "display: flex",
                "display: inline"
            ],
            answer: 2
        },

        {
            question: "Which property is used to center text?",
            options: [
                "text-align",
                "align-text",
                "center-text",
                "text-center"
            ],
            answer: 0
        },

        {
            question: "Which property makes text bold?",
            options: [
                "font-style",
                "font-weight",
                "text-bold",
                "font-bold"
            ],
            answer: 1
        },

        {
            question: "What is the extension of a CSS file?",
            options: [
                ".html",
                ".css",
                ".js",
                ".style"
            ],
            answer: 1
        }
    ],



    //    JAVASCRIPT QUESTIONS


    javascript: [
        {
            question: "What is JavaScript?",
            options: [
                "A programming language",
                "A database",
                "A CSS framework",
                "An image format"
            ],
            answer: 0
        },

        {
            question: "What is the extension of a JavaScript file?",
            options: [
                ".html",
                ".css",
                ".js",
                ".java"
            ],
            answer: 2
        },

        {
            question: "Which keyword can be used to declare a variable?",
            options: [
                "var",
                "variable",
                "value",
                "declare"
            ],
            answer: 0
        },

        {
            question: "What does console.log() do?",
            options: [
                "Creates an HTML element",
                "Displays information in the console",
                "Changes CSS",
                "Reloads the page"
            ],
            answer: 1
        },

        {
            question: "Which keyword is used to create a function?",
            options: [
                "function",
                "method",
                "func",
                "create"
            ],
            answer: 0
        },

        {
            question: "Which structure is used to store multiple values?",
            options: [
                "String",
                "Array",
                "Boolean",
                "Number"
            ],
            answer: 1
        },

        {
            question: "Which statement is used for a condition?",
            options: [
                "if",
                "check",
                "condition",
                "when"
            ],
            answer: 0
        },

        {
            question: "Which event occurs when a button is clicked?",
            options: [
                "onload",
                "onchange",
                "onclick",
                "onhover"
            ],
            answer: 2
        },

        {
            question: "What does getElementById() do?",
            options: [
                "Creates an ID",
                "Finds an element by its ID",
                "Deletes an element",
                "Changes the page title"
            ],
            answer: 1
        },

        {
            question: "Which symbol starts a single-line comment in JavaScript?",
            options: [
                "<!--",
                "//",
                "#",
                "/*"
            ],
            answer: 1
        }
    ]

};



//    VARIABLES


let currentQuiz = "";

let currentQuestion = 0;

let score = 0;

let userAnswers = [];



//    HTML ELEMENTS


const homePage =
    document.getElementById("homePage");

const quizPage =
    document.getElementById("quizPage");

const resultPage =
    document.getElementById("resultPage");

const quizTitle =
    document.getElementById("quizTitle");

const questionNumber =
    document.getElementById("questionNumber");

const progressBar =
    document.getElementById("progressBar");

const question =
    document.getElementById("question");

const options =
    document.getElementById("options");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");


//    START QUIZ


function startQuiz(type) {

    currentQuiz = type;

    currentQuestion = 0;

    score = 0;

    userAnswers =
        new Array(quizData[type].length).fill(null);


    homePage.classList.add("hidden");

    resultPage.classList.add("hidden");

    quizPage.classList.remove("hidden");


    if (type === "html") {

        quizTitle.textContent =
            "HTML Quiz";

    }

    else if (type === "css") {

        quizTitle.textContent =
            "CSS Quiz";

    }

    else {

        quizTitle.textContent =
            "JavaScript Quiz";

    }


    showQuestion();

    window.scrollTo(0, 0);
}


//    SHOW QUESTION


function showQuestion() {

    const questions =
        quizData[currentQuiz];

    const current =
        questions[currentQuestion];


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    question.textContent =
        current.question;


    options.innerHTML = "";


    current.options.forEach((option, index) => {

        const label =
            document.createElement("label");


        label.className = "option";


        if (userAnswers[currentQuestion] === index) {

            label.classList.add("selected");

        }



        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "answer";
        radio.value = index;

        if (userAnswers[currentQuestion] === index) {
            radio.checked = true;
        }

        const text = document.createElement("span");

        text.textContent = option;

        label.appendChild(radio);
        label.appendChild(text);


        radio.addEventListener("change", function () {

            userAnswers[currentQuestion] =
                Number(this.value);


            document
                .querySelectorAll(".option")
                .forEach(item => {

                    item.classList.remove("selected");

                });


            label.classList.add("selected");

        });


        options.appendChild(label);

    });


    /* Previous Button */

    previousButton.disabled =
        currentQuestion === 0;


    /* Next Button */

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "Finish Quiz";

    }

    else {

        nextButton.textContent =
            "Next →";

    }
}


//    NEXT QUESTION


function nextQuestion() {

    const questions =
        quizData[currentQuiz];


    if (
        userAnswers[currentQuestion] === null
    ) {

        alert("Please select an answer first.");

        return;
    }


    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        showQuestion();

    }

    else {

        calculateResult();

    }
}



//    PREVIOUS QUESTION


function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }
}


//    CALCULATE RESULT


function calculateResult() {

    const questions =
        quizData[currentQuiz];


    score = 0;


    questions.forEach((item, index) => {

        if (
            userAnswers[index] ===
            item.answer
        ) {

            score++;

        }

    });


    const total =
        questions.length;


    const percentage =
        Math.round((score / total) * 100);


    showResult(
        score,
        total,
        percentage
    );
}


//    SHOW RESULT


function showResult(
    finalScore,
    total,
    percentage
) {

    quizPage.classList.add("hidden");

    resultPage.classList.remove("hidden");


    let name;


    if (currentQuiz === "html") {

        name = "HTML";

    }

    else if (currentQuiz === "css") {

        name = "CSS";

    }

    else {

        name = "JavaScript";

    }


    document.getElementById("resultTitle")
        .textContent =
        `${name} Quiz Completed!`;


    document.getElementById("scoreText")
        .textContent =
        `${finalScore}/${total}`;


    document.getElementById("totalQuestions")
        .textContent =
        total;


    document.getElementById("finalScore")
        .textContent =
        finalScore;


    document.getElementById("percentage")
        .textContent =
        `${percentage}%`;


    let message;


    if (percentage >= 80) {

        message =
            "Excellent! Great work! 🎉";

    }

    else if (percentage >= 50) {

        message =
            "Good job! Keep practicing! 👍";

    }

    else {

        message =
            "Keep learning and try again! 💪";

    }


    document.getElementById("resultMessage")
        .textContent =
        message;


    window.scrollTo(0, 0);
}


//    TRY AGAIN


function tryAgain() {

    resultPage.classList.add("hidden");

    quizPage.classList.remove("hidden");


    currentQuestion = 0;

    score = 0;


    userAnswers =
        new Array(
            quizData[currentQuiz].length
        ).fill(null);


    showQuestion();

    window.scrollTo(0, 0);
}


//    GO HOME


function goHome() {

    quizPage.classList.add("hidden");

    resultPage.classList.add("hidden");

    homePage.classList.remove("hidden");


    currentQuiz = "";

    currentQuestion = 0;

    score = 0;

    userAnswers = [];


    window.scrollTo(0, 0);
}