document.addEventListener("DOMContentLoaded", function () {
  let container = document.querySelector(".grid-container");
  let scoreGame = document.querySelector("#gameScore");
  let resetGame = document.querySelector("#resetButton");
  let finalScore = document.querySelector(".finalScore");
  let resultContainer = document.querySelector(".result-display");
  let totalScore = 0;
  let pictures = [];
  let clicked = false;

  resetGame.onclick = () => {
    for (let i = 0; i < allDivs.length; i++) {
      if (allDivs[i].classList.contains("bg")) {
        allDivs[i].classList.remove("bg");
      } else {
        if (allDivs[i].classList.contains("green")) {
          allDivs[i].classList.remove("green");
        } else {
          totalScore = 0;
          resultContainer.style.display = "none";
          container.style.display = "grid";

          finalScore.innerHTML = totalScore;
          scoreGame.innerHTML = totalScore;
        }
      }
    }
    //reseting random bombs
    pictures.length = 0; 
    
    setPictures(pictures);
    console.log(pictures);
    setRandomBombs(pictures);
  };

  // creating div box
  for (let i = 0; i < 81; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("block");
    container.appendChild(newDiv);
  }

  
   
  setPictures(pictures);
 
  setRandomBombs(pictures); 
  console.log(pictures);
   

  let allDivs = document.querySelectorAll(".block");
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].onclick = () => {
      //  checking which div's has background image
      if (allDivs[i].classList.contains("bg")) {
        clicked = true;
        if (clicked) {
          for (let j = 0; j < allDivs.length; j++) {
            if (allDivs[j].hasAttribute("id")) {
              allDivs[j].removeAttribute("id");

              setTimeout(() => {
                container.style.display = "none";
                finalScore.innerHTML = totalScore;
              }, 3000);

              // gameOver.style.display = "flex"
            }
          }
        }
      } else {

        //  setting div color green and score counting

        if (allDivs[i].classList.contains("green")) {
          return false;
        } else {
          allDivs[i].classList.add("green");
          scoreGame.innerHTML = ++totalScore;
          console.log(totalScore);
        }
      }
    };
 
  }
});

 
function setRandomBombs(pictures) {
  let allDivs = document.querySelectorAll(".block");
  for (let i = 0; i < allDivs.length; i++) {
    if (pictures.includes(i)) {
      allDivs[i].classList.add("bg");
      allDivs[i].setAttribute("id", "blockDisplay");
    }
  }
}

function setPictures(pictures) {
  for (let i = 0; i < 10; i++) {
    pictures.push(Math.floor(Math.random() * 81));
  }
}
