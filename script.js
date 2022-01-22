var countQuestion = 0,
    score = 0;
let question = [
    "Quel est la capital d'Haiti?",
    "Ou se trouve la citadelle laferriere?",
];
let GoodAnswer = ["port-au-prince", "milot"];
let badAnswer = [
    ["Cap-haitien", "Hinche", "Fort-liberte"],
    ["Gonaives", "Cap-haitien", "Port-de-paix"],
];
const getQuestion = () => {

    let frameQuestion = document.getElementById("frame");
    let p = document.createElement("p");

    if (countQuestion < question.length) {
        // this statement delete the childnode of the div frame before adding the p element
        if (frameQuestion.hasChildNodes()) {
            let pChild = document.querySelector("#frame p");
            pChild.remove()
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
    let boardScore = document.querySelector("#score span");
    boardScore.innerText = ++score;
};
getQuestion();
// getQuestion();
