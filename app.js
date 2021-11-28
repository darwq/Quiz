// VARIABLES

let answer = document.querySelectorAll(".answers h3");
let question = document.querySelector(".content h2");
let nextButton = document.querySelector(".next-button");
let pointsText = document.querySelector(".points-text");
let theClass = "";

let questionIndex = 0;
let answerIndex = 0;

let points = 0;

let counter = 0;

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
  element.innerText = answers[questionIndex][answerIndex];

  element.addEventListener("click", (e) => {
    answer.forEach((element) => {
      element.classList.remove("checked");
    });
    e.target.classList.add("checked");

    theClass = element.innerText;
    console.log(theClass);
  });

  answerIndex++;
});

nextButton.addEventListener("click", (e) => {
  if (questionIndex === questions.length - 1) {
    question.classList.add("finish");
    answer.forEach((element) => {
      element.classList.add("finish");
    });
    nextButton.classList.add("finish");

    if (counter === 0) {
      // ADDING THE FINISH TEXT
      let header = document.createElement("h3");
      header.innerText = "Vous avez terminé le quiz";
      header.classList.add("finish-text");
      document.querySelector(".content").appendChild(header);

      // ADDING THE RETRY BUTTON
      let retryButton = document.createElement("button");
      retryButton.innerText = "Réessayez le quiz";
      retryButton.classList.add("retry-button");
      document.querySelector(".content").appendChild(retryButton);

      document.querySelector(".retry-button").addEventListener("click", (e) => {
        e.target.classList.add("finish");
        header.classList.add("finish");

        questionIndex = 0;

        answerIndex = 0;

        points = 0;

        question.classList.remove("finish");
        answer.forEach((element) => {
          element.classList.remove("finish");
        });
        nextButton.classList.remove("finish");

        question.innerText = questions[questionIndex];

        answer.forEach((element) => {
          answer.forEach((element) => {
            element.classList.remove("checked");
          });
          element.innerText = answers[questionIndex][answerIndex];

          answerIndex++;
        });
      });

      counter++;
    } else {
      document.querySelector(".retry-button").classList.remove("finish");
      document.querySelector(".finish-text").classList.remove("finish");
    }
  }
  if (questionIndex < questions.length - 1) {
    if (theClass !== correctAnswers[questionIndex]) {
      if (points >= 5) {
        points -= 5;
      }
    } else {
      points += 5;
    }

    pointsText.innerText = `Points: ${points}`;

    questionIndex++;

    answerIndex = 0;

    question.innerText = questions[questionIndex];

    answer.forEach((element) => {
      answer.forEach((element) => {
        element.classList.remove("checked");
      });
      element.innerText = answers[questionIndex][answerIndex];

      answerIndex++;
    });
  }
});
