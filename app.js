// VARIABLES

let answer = document.querySelectorAll(".answers h3");
let question = document.querySelector(".content h2");
let nextButton = document.querySelector(".next-button");
let pointsText = document.querySelector(".points-text");
let theClass = "";

let questionIndex = 0;
let answereIndex = 0;

let points = 0;

// LISTS

let questions = [
  "Quelle est l'espagne est la capitale",
  "Que représente la semana santa pour les espagnols",
];

let answers = [
  ["Abuja", "Andorra la Vella", "Madrid", "București"],
  ["Joie", "tristesse", "Une fête religieuse", "une tradition ordinaire"],
];

let correctAnswers = ["Madrid", "Une fête religieuse"];

question.innerText = questions[questionIndex];

answer.forEach((element) => {
  element.innerText = answers[questionIndex][answereIndex];

  element.addEventListener("click", (e) => {
    answer.forEach((element) => {
      element.classList.remove("checked");
    });
    e.target.classList.add("checked");

    theClass = element.innerText;
    console.log(theClass);
  });

  answereIndex++;
});

nextButton.addEventListener("click", (e) => {
  if (theClass !== correctAnswers[questionIndex]) {
    if (points !== 0) {
      points -= 5;
    }
  } else {
    points += 5;
    pointsText.innerText = `Points: ${points}`;
  }

  questionIndex++;

  answereIndex = 0;

  question.innerText = questions[questionIndex];

  answer.forEach((element) => {
    answer.forEach((element) => {
      element.classList.remove("checked");
    });
    element.innerText = answers[questionIndex][answereIndex];

    answereIndex++;
  });
});
