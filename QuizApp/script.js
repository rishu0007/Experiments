const quizData = [
    {
        question: "How old is Rishu?",
        a: "10",
        b: "20",
        c: "21",
        d: "18",
        correct: "c"
    }, 
    {
        question: "What is the most used programming language in 2019",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "a"
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano", 
        d: "Joe Biden",
        correct: "d"
    },
    {
        question: "What does HTML stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "JavaScript Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },
    {
        question : "What year was JavaScripth launched?",
        a: "1996",
        b: "1995",
        c: "1998",
        d: "2000",
        correct: "b"
    }
];

const questionE1 = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

const getSelected = () => {
    const answerEls = document.querySelectorAll(".answer");

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            return answerEl.id;
        }
    });

    return undefined;
}

submitBtn.addEventListener('click', () => {
    currentQuiz++;
    const answer = getSelected();

    if(answer) {

    }
    // if(currentQuiz < quizData.length) {
    //     loadQuiz();
    // } else {
    //     // todo show result
    //     alert("You are finished! Get some rest now")
    // }
});
