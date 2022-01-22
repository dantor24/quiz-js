var countQuestion = 0,
    score = 0,
    post = 0, item =0;
let question = [
    "Quel est la capital d'Haiti?",
    "Ou se trouve la citadelle laferriere?",
    "Qui est le précurseur de l'indépendance?",
];
let GoodAnswer = ["port-au-prince", "milot","Toussaint Louverture"];
let badAnswer = [
    ["Cap-haitien", "Hinche", "Fort-liberte"],
    ["Gonaives", "Cap-haitien", "Port-de-paix"],
    ["Dessalines","Capois","Henry Christophe"]
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

// return a random number 
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomQuestion = (good = [],bad = []) =>{
    let randomArray  = new Array();
    let collectArray = new Array();
    let randValue = 0;
    
    for(let i =0; i < bad.length; i++){
        randValue  = randomInteger(0,3);
        // console.log(randValue)
        for(let j =0; j <= bad[i].length; j++){
        
            if(randValue === j){
                randomArray.push(good[i]);
                // randomArray.push(bad[i][j])
                continue;
            }else{
                
                if(bad[i][j] === undefined){
                    randomArray.push("aucune de ces reponses");
                }else{
                    randomArray.push(bad[i][j]);
                }
            }
        }
        collectArray.push(randomArray);
        randomArray = new Array();
    }
    return collectArray;
}
const btnA = () => {
    let btnValue = document.querySelector(".answer:nth-child(1)")
    console.log(GoodAnswer[countQuestion-1])
    if(btnValue.textContent === GoodAnswer[countQuestion-1]){
        incrementScore();
        getQuestion();
        getBtnAnswer();
    }else{
        getQuestion();
        getBtnAnswer();
    }
}
const getBtnAnswer = () =>{
    let randVal = randomQuestion(GoodAnswer,badAnswer);
    
    let btnValue = document.querySelectorAll(".answer")
    Array.from(btnValue).forEach(function(btn){
        console.log(randVal[post][item]);
        btn.textContent = randVal[post][item]
        item++;  
    });
    post++;
    item = 0;

}
getQuestion();
getBtnAnswer();

// btnA();
// console.log(randomQuestion(GoodAnswer,badAnswer))