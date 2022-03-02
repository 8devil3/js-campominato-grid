const divContainer = document.querySelector(".container");
const selectLevelInput = document.querySelector("#level");
let divNumberBox;

const btnPlay = document.querySelector("#play");

const lvEasy = 49;
const lvMedium = 81;
const lvHard = 100;

const widthHeightNumberBox = 32;



btnPlay.addEventListener("click", play);


function play() { // avvio gioco

    reset(); //reset schermata
    
    if (selectLevelInput.value == '1') { //generazione griglia di gioco
        grid(lvEasy);
    } else if (selectLevelInput.value == '2') {
        grid(lvMedium);
    } else {
        grid(lvHard);
    }
}


function reset() { //reset container
    divContainer.innerHTML = "";
}


function grid(level) { //generatore della griglia, arg -> int

    for (let x = 1; x <= level; x++) {
        divNumberBox = document.createElement("div");
        divNumberBox.innerHTML = x;

        divContainer.append(divNumberBox);

        divNumberBox.style.width = widthHeightNumberBox + "px";
        divNumberBox.style.height = widthHeightNumberBox + "px";

        divContainer.style.width = widthHeightNumberBox * Math.sqrt(level) + "px";
        divContainer.style.height = widthHeightNumberBox * Math.sqrt(level) + "px";
    }

}