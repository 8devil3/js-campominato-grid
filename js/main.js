const divContainer = document.querySelector('.container');
const selectLevelInput = document.querySelector('#level');
let divNumberBox;

const btnPlay = document.querySelector('#play');

const lvEasy = 49;
const lvMedium = 81;
const lvHard = 100;



btnPlay.addEventListener('click', play);


function play() {
    reset();
    grid(selectLevelInput.value);
}


function grid(level) {
    if (level == "1") {

        for (let x = 1; x <= lvEasy; x++) {
            divNumberBox = document.createElement('div');
            divNumberBox.innerHTML = x;
            divContainer.append(divNumberBox);
            divContainer.classList.add('lvEasy');
        }

    } else if (level == "2") {

        for (let x = 1; x <= lvMedium; x++) {
            divNumberBox = document.createElement('div');
            divNumberBox.innerHTML = x;
            divContainer.append(divNumberBox);
            divContainer.classList.add('lvMedium');
        }

    } else {

        for (let x = 1; x <= lvHard; x++) {
            divNumberBox = document.createElement('div');
            divNumberBox.innerHTML = x;
            divContainer.append(divNumberBox);
            divContainer.classList.add('lvHard');
        }
    }
}

function reset() {
    divContainer.classList.remove('lvEasy','lvMedium','lvHard'); //reset classi container
    divContainer.innerHTML = ''; //reset container
}