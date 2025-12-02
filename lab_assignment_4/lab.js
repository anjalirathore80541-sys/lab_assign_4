// *******************
// JAVASCRIPT QUIZ GAME (MULTIPLE CHOICE + SCORES)
// This quiz runs in the browser console.
// It asks MCQ questions and stores your high score using localStorage.
// *******************

// Quiz questions stored in an array
const quizQuestions = [
  {
    question: "What is the capital of Germany?",
    options: ["A: London", "B: Paris", "C: Rome", "D: Berlin"],
    answer: "d"
  },
  {
    question: "Which planet is away from the earth ?",
    options: ["A: Jupiter", "B: Mercury", "C: Saturn", "D: Venus"],
    answer: "c"
  },
  {
    question: "What is the largest mammal?",
    options: ["A: Elephant", "B: Giraffe", "C: Blue Whale", "D: Hippo"],
    answer: "c"
  },
  {
    question: "What is 15 + 05?",
    options: ["A: 20", "B: 25", "C: 30", "D: 35"],
    answer: "a"
  },
  {
    question: "Who wrote 'War and Peace'?",
    options: ["A: Dickens", "B: Tolstoy", "C: Shakespeare", "D: Homer"],
    answer: "b"
  }
];

function runQuiz() {
  let score = 0;

  alert("Welcome to the Quiz! Answer using a, b, c, or d.");

  for (let i = 0; i < quizQuestions.length; i++) {
    const q = quizQuestions[i];

    const questionText =
      q.question +
      "\n" +
      q.options.join("\n") +
      "\n(Type: a, b, c, or d)";

    let userInput = prompt(questionText);

    if (userInput === null) {
      alert("Quiz ended early.");
      return;
    }

    userInput = userInput.toLowerCase().trim();

    if (userInput === q.answer) {
      score++;
      alert("Correct!");
    } else {
      alert("Wrong! Correct answer: " + q.answer.toUpperCase());
    }
  }

  alert("Quiz Completed!\nYour Score: " + score + "/" + quizQuestions.length);
  saveHighScore(score);
}

function saveHighScore(score) {
  let previousHighScore = localStorage.getItem("quizHighScore");

  if (previousHighScore === null || score > Number(previousHighScore)) {
    localStorage.setItem("quizHighScore", score);
    alert("New High Score! 🎉 Score: " + score);
  } else {
    alert(
      "Your Score: " + score +
      "\nCurrent High Score: " + previousHighScore
    );
  }
}

runQuiz();