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
  "Quelle est l'espagne est la capitale ?",
  "Que représente la semana santa pour les espagnols ?",
  "Comment s'appelle le drapeau espagnol en espagne ?",
  "Quelles couleurs sont sur le drapeau espagnol ?",
  "Quelle monnaie est utilisée en Espagne ?",
  "Quel est le plus long fleuve qui passe en Espagne ?",
  "Qui était le roi d'Espagne en 2020 ?",
  "Quand est la fête nationale de l'Espagne ?",
  "Quelle est la plus haute montagne d'Espagne ?",
  "Laquelle de ces villes n'est pas située dans le sud de l'Espagne ?",
  "Quelle est la capitale de l'Andalousie ?",
  "Quelle rivière traverse Cordoue ?",
  "Quand était la guerre civile espagnole ?",
  "Quel est le plus haut volcan d'Espagne ?",
  "Quel dictateur régnait pendant la guerre civile ?",
  'Quel est le nom espagnol de l émission Netflix "Money Heist" ?',
  "Qui a été le premier acteur espagnol à devenir un méchant de James Bond ?",
  "Comment dit-on Espagne en espagnol ?",
  "Qui est le chef de l'État en Espagne ?",
  "Comment est l'équipe de football principale de Barcelone, le stade s'appelle-t-il ?",
];

let answers = [
  ["Abuja", "Andorra la Vella", "Madrid", "București"],
  ["Joie", "Une fête religieuse", "tristesse", "une tradition ordinaire"],
  [
    "Il n'a pas de nom",
    "Drapeau espagnol",
    "Carte de visite du peuple espagnol",
    "Bandera de España",
  ],
  ["Rouge, Jaune", "Vert, Violet", "Orange", "Bleu, Gris"],
  ["Dollar", "Livres sterling", "Euro", "Lei"],
  ["Amazone", "Ebro River", "Léna", "Chine"],
  ["Ferdinand I", "King Jofrey", "Felipe VI", "Alfred the Great"],
  [
    "12 octobre",
    "Lundi 6 novembre",
    "Dimanche 2 septembre",
    "Tous les 1er janvier",
  ],
  ["Mont Teide", "Mont Aneto", "Mont Veleta", "Monte Perdido"],
  ["Granada", "Almería", "Séville", "Bilbao"],
  ["Madrid", "Espagne", "Paris", "Séville"],
  ["Fleuve Guadalquivir", "Primero River", "Le Nil", "Danube"],
  [
    "28 août 1930 - 1er avril 1936",
    "15 septembre 1933 – 10 avril 1939",
    "17 iulie 1936 – 1 aprilie 1939",
    "10 juillet 1923 – 3 avril 1926",
  ],
  ["Le volcan Teide", "Etna", "Cotopaxi", "Fuji"],
  ["Vladimir Lenin", "Vlad III", "Francisco Franco", "Genghis Khan"],
  [
    "Casa di Carta",
    "Fabrica de Bani",
    "Paradis del Dinero",
    "La Casa de Papel",
  ],
  ["Javier Bardem", "Raoul Silva", "Ursula Corbero", "Ryan Raynolds"],
  ["Espagna", "España", "Spania", "Sepanyol"],
  ["Le Roi", "Le président", "Le maire", "Le gouverneur"],
  ["Goodison Park", "Anfield", "Camp Nou", "Turf Moor"],
];

let correctAnswers = [
  "Madrid",
  "Une fête religieuse",
  "Bandera de España",
  "Rouge, Jaune",
  "Euro",
  "Ebro River",
  "Felipe VI",
  "12 octobre",
  "Mont Teide",
  "Almería",
  "Séville",
  "Primero River",
  "17 iulie 1936 – 1 aprilie 1939",
  "Le volcan Teide",
  "Francisco Franco",
  "La Casa de Papel",
  "Javier Bardem",
  "España",
  "Le Roi",
  "Camp Nou",
];

let scoreVariation = ["bad", "acceptable", "good"];

// SOUNDS

let wrongSound = new Audio("sounds/mixkit-basketball-buzzer-1647.mp3");

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

    if (theClass !== correctAnswers[questionIndex]) {
      wrongSound.play();
    } else {
      points += 5;
    }

    pointsText.innerText = `Points: ${points}`;

    if (counter === 0) {
      // ADDING THE FINISH TEXT
      let header = document.createElement("h3");
      header.innerText = "Vous avez terminé le quiz";
      header.classList.add("finish-text");
      document.querySelector(".content").appendChild(header);

      // ADDING THE SCORE TEXT

      let score = document.createElement("h3");
      score.innerText = `Score: ${points}/100`;
      score.classList.add("score");
      if (points <= 20) {
        score.classList.add("bad");
      } else if (points <= 50) {
        score.classList.add("acceptable");
      } else if (points >= 50) {
        score.classList.add("good");
      }
      document.querySelector(".content").appendChild(score);

      // ADDING THE RETRY BUTTON
      let retryButton = document.createElement("button");
      retryButton.innerText = "Réessayez le quiz";
      retryButton.classList.add("retry-button");
      document.querySelector(".content").appendChild(retryButton);

      document.querySelector(".retry-button").addEventListener("click", (e) => {
        e.target.classList.add("finish");
        header.classList.add("finish");
        score.classList.add("finish");

        questionIndex = 0;

        answerIndex = 0;

        points = 0;

        pointsText.innerText = `Points: ${points}`;

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
      scoreVariation.forEach((element) => {
        document.querySelector(".score").classList.remove(element);
      });

      if (points <= 20) {
        document.querySelector(".score").classList.add("bad");
      } else if (points <= 50) {
        document.querySelector(".score").classList.add("acceptable");
      } else if (points >= 50) {
        document.querySelector(".score").classList.add("good");
      }

      document.querySelector(".score").innerText = `Score: ${points}/100`;

      document.querySelector(".retry-button").classList.remove("finish");
      document.querySelector(".finish-text").classList.remove("finish");
      document.querySelector(".score").classList.remove("finish");
    }
  }
  if (questionIndex < questions.length - 1) {
    if (theClass !== correctAnswers[questionIndex]) {
      wrongSound.play();
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
