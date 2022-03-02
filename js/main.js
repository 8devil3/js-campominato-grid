const divContainer = document.querySelector(".container");
const selectLevelInput = document.querySelector("#level");
let divNumberBox;

const btnPlay = document.querySelector("#play");

const lvEasy = 49;
const lvMedium = 81;
const lvHard = 100;

const widthHeightNumberBox = 32;



btnPlay.addEventListener("click", play);

function play() {
    reset();
    grid(selectLevelInput.value);
}

function grid(level) {
    if (level == "1") {
        for (let x = 1; x <= lvEasy; x++) {
            divNumberBox = document.createElement("div");
            divNumberBox.innerHTML = x;
            divContainer.append(divNumberBox);

            divNumberBox.style.width = widthHeightNumberBox + "px";
            divNumberBox.style.height = widthHeightNumberBox + "px";

            divContainer.style.width =
                widthHeightNumberBox * Math.sqrt(lvEasy) + "px";
            divContainer.style.height =
                widthHeightNumberBox * Math.sqrt(lvEasy) + "px";
        }
    } else if (level == "2") {
        for (let x = 1; x <= lvMedium; x++) {
            divNumberBox = document.createElement("div");
            divNumberBox.innerHTML = x;
            divContainer.append(divNumberBox);

            divNumberBox.style.width = widthHeightNumberBox + "px";
            divNumberBox.style.height = widthHeightNumberBox + "px";

            divContainer.style.width =
                widthHeightNumberBox * Math.sqrt(lvMedium) + "px";
            divContainer.style.height =
                widthHeightNumberBox * Math.sqrt(lvMedium) + "px";
        }
    } else {
        for (let x = 1; x <= lvHard; x++) {
            divNumberBox = document.createElement("div");
            divNumberBox.innerHTML = x;
            divContainer.append(divNumberBox);

            divNumberBox.style.width = widthHeightNumberBox + "px";
            divNumberBox.style.height = widthHeightNumberBox + "px";

            divContainer.style.width =
                widthHeightNumberBox * Math.sqrt(lvHard) + "px";
            divContainer.style.height =
                widthHeightNumberBox * Math.sqrt(lvHard) + "px";
        }
    }
}

function reset() {
    divContainer.classList.remove("lvEasy", "lvMedium", "lvHard"); //reset classi container
    divContainer.innerHTML = ""; //reset container
}
