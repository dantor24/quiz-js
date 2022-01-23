var countQuestion = 0,
  score = 0,
  post = 0,
  item = 0;
let question = [
  "Quel est la capital d'Haiti?",
  "Ou se trouve la citadelle laferriere?",
  "Qui est le précurseur de l'indépendance d'Haiti?",
  "La commune de limonade se trouve dans quel departement?",
  "En quelle année christophe colomb a découvert l'amérique?",
];
let GoodAnswer = ["port-au-prince", "milot", "Toussaint Louverture","nord","1492"];
let badAnswer = [
  ["Cap-haitien", "Hinche", "Fort-liberte"],
  ["Gonaives", "Cap-haitien", "Port-de-paix"],
  ["Dessalines", "Capois", "Henry Christophe"],
  ["sud", "nord-est", "Grande-anse"],
  ["1702","1803","1490"]
];
const getQuestion = () => {
  let frameQuestion = document.getElementById("frame");
  let p = document.createElement("p");

  if (countQuestion < question.length) {
    // this statement delete the childnode of the div frame before adding the p element
    if (frameQuestion.hasChildNodes()) {
      let pChild = document.querySelector("#frame p");
      pChild.remove();
      p.innerText = question[countQuestion];
      frameQuestion.appendChild(p);
      countQuestion++;
    } else {
      p.innerText = question[countQuestion];
      frameQuestion.appendChild(p);
      countQuestion++;
    }
  }
};

const incrementScore = () => {
  let boardScore = document.querySelector("#point");
  boardScore.innerText = ++score;
};

const total = () => {
  let value = document.querySelector("#total");
  value.innerText = question.length;
}

// return a random number
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// create a new array who contain good and bad answer randomly
const randomQuestion = (good = [], bad = []) => {
  let randomArray = new Array();
  let collectArray = new Array();
  let randValue = 0;

  for (let i = 0; i < bad.length; i++) {
    randValue = randomInteger(0, 3);
    // console.log(randValue)
    for (let j = 0; j <= bad[i].length; j++) {
      if (randValue === j) {
        randomArray.push(good[i]);
        // randomArray.push(bad[i][j])
        continue;
      } else {
        if (bad[i][j] === undefined) {
          randomArray.push("aucune de ces reponses");
        } else {
          randomArray.push(bad[i][j]);
        }
      }
    }
    collectArray.push(randomArray);
    randomArray = new Array();
  }
  return collectArray;
};
// take the button position as argument and assign a answer for this button
const btn = (index) => {
  let btnValue = document.querySelector(`.answer:nth-child(${index})`);
  if (post <= question.length) {
    if (btnValue.textContent === GoodAnswer[countQuestion - 1]) {
      soundP("./sound/right.mp3");
      console.log(
        "choix: " +
          btnValue.textContent +
          "  bonne rep: " +
          GoodAnswer[countQuestion - 1]
      );

      incrementScore();
      getQuestion();
      getBtnAnswer();
    } else {
      soundP("./sound/wrong.mp3");
      console.log(
        "choix: " +
          btnValue.textContent +
          "  bonne rep: " +
          GoodAnswer[countQuestion - 1]
      );
      getQuestion();
      getBtnAnswer();
    }
  } else {
    alert("quiz terminez");
  }
};

const getBtnAnswer = () => {
  let randVal = randomQuestion(GoodAnswer, badAnswer);

  let btnValue = document.querySelectorAll(".answer");
  Array.from(btnValue).forEach(function (btn) {
    // console.log(randVal[post][item]);
    if (post < question.length) {
      btn.textContent = randVal[post][item];
      item++;
    }
  });
  post++;
  item = 0;
};

function soundP(src) {
  let sound = document.createElement("audio");
  sound.src = src;
  sound.setAttribute("preload", "auto");
  sound.setAttribute("controls", "none");
  sound.style.display = "none";
  document.body.appendChild(sound);
  sound.play();
}
