const quizDB = [
  {
    question: "1. Javascript is an _______ language?",
    answers: [
      { answer: "Object-oriented", isCorrect: true },
      { answer: "Object-Based", isCorrect: false },
      { answer: "Procedural", isCorrect: false },
      { answer: "None of the above", isCorrect: false },
    ],
  },

  {
    question:
      "2. Which of the following keywords is used to define a variable in Javascript?",
    answers: [
      { answer: "var", isCorrect: false },
      { answer: "let", isCorrect: false },
      { answer: "Both A and B", isCorrect: true },
      { answer: "None of the above", isCorrect: false },
    ],
  },

  {
    question:
      "3. Which of the following methods is used to access HTML elements using Javascript?",
    answers: [
      { answer: "getElementbyId", isCorrect: false },
      { answer: "getElementByClassName()", isCorrect: false },
      { answer: "Both A and B", isCorrect: true },
      { answer: "None of the above", isCorrect: false },
    ],
  },

  {
    question:
      "4. Upon encountering empty statements, what does the Javascript Interpreter do?",

    answers: [
      { answer: "Throws an error", isCorrect: false },
      { answer: "ignores the statements", isCorrect: true },
      { answer: "Gives the warning", isCorrect: false },
      { answer: "None of the above", isCorrect: false },
    ],
  },

  {
    question:
      "5. Which of the following methods can be used to display data in some form using Javascript?",

    answers: [
      { answer: "document.write()", isCorrect: false },
      { answer: "console.log()", isCorrect: false },
      { answer: "window.alert()", isCorrect: false },
      { answer: "All of the above", isCorrect: true },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const play = document.querySelector(".btn");
const submit = document.querySelector(".submit");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers : ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers : ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Your Score : ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === quizDB.length) return showResult();
  selectedAnswer = null;

  question.textContent = quizDB[qNumber].question;
  answersContainer.innerHTML = quizDB[qNumber].answers
    .map(
      (item, index) => `
  <div class = 'answers'>
    <input type= "radio" name = "answer" id = ${index} value = ${item.isCorrect} />
    <label for =${index}> ${item.answer}</label>
  </div>`
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;

      showQuestion(qIndex);
    } else {
      alert("Slect an answer!");
    }
  });
};

submitAnswer();
showQuestion(qIndex);
