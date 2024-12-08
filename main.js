let playbtn = document.querySelector("#playbtn");
let totalSum = document.querySelector("#total-sum");
let result = document.querySelector("#result");
let diceImage1 = document.querySelector("#diceOne img");
let diceImage2 = document.querySelector("#diceTwo img");
let diceContainer = document.querySelector(".dice-con")
let imageSection = document.querySelector(".img-section img")

let count = 0;

const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
};

const playGame = () => {
    let diceA = rollDice();
    let diceB = rollDice();
    let sum = diceA + diceB;

    diceContainer.style.display ="flex"
 

    // Updating image on click

    diceImage1.setAttribute("src", `./dice_num_${diceA}-removebg-preview.png`);
    diceImage2.setAttribute("src", `./dice_num_${diceB}-removebg-preview.png`);

    // dice total number
    totalSum.innerText = `= ${sum} =`;

    
    

  
    // 
    if (sum === 7 || sum === 11 ) {
        result.innerText = "😁 YOU WIN! 😁";
        result.style.color = "green";
        imageSection.style.width = "50%"
        imageSection.setAttribute("src", `./winStar.png`);
    } else if (sum === 2 || sum === 3 || sum === 12) {
        result.innerText = "😔 YOU LOSE! 😔";
        result.style.color = "red";
        imageSection.setAttribute("src", `./you-lose.png`);
        imageSection.style.width = "50%"


    } else {
        result.innerText = "😏 Roll Again 😏";
        result.style.color = "grey";
        imageSection.setAttribute("src", `./dice logo image.png`);
           imageSection.style.width = "50%"

    }


    if (Count > 2) {
        result.innerText = "🌟 You are a Lucky Star! 🌟";
        result.style.color = "gold"; 
    }





};

///   event on  button 

playbtn.addEventListener("click", playGame);



// ----------- Cursor pointer ------------- //


const fancyCursor = document.querySelector("#fancyCursor");

document.addEventListener("mousemove", (e) => {
    fancyCursor.style.left = `${e.pageX}px`;
    fancyCursor.style.top = `${e.pageY}px`;
});



const interactiveElements = document.querySelectorAll("a, button");

interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        fancyCursor.style.transform = "scale(1.5)";
        fancyCursor.style.backgroundColor = "#FFD333";
    });
    el.addEventListener("mouseleave", () => {
        fancyCursor.style.transform = "scale(1)";
        fancyCursor.style.backgroundColor = "transparent";
    });
});
