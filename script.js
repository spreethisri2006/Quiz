const questions = [
  {
    question: "HTML full form?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Text Madeup Language", correct: false },
      { text: "Hyperlinks Text Making Language", correct: false }
    ]
  },
  {
    question: "Which is CSS property?",
    answers: [
      { text: "color", correct: true },
      { text: "length", correct: false },
      { text: "number", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(answer) {
  if (answer.correct) score++;
  nextButton.style.display = "block";
}

    function showScore() {
  resetState();
  if (questionElement) { // safety check
    questionElement.innerHTML = "Quiz Over! Your Score: " + score + "/" + questions.length;
  }
  nextButton.innerHTML = "Restart";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

window.onload = startQuiz;