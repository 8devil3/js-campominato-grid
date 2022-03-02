const divContainer = document.querySelector('.container');
const selectLevelInput = document.querySelector('#level');
let divNumberBox;

const btnPlay = document.querySelector('#play');

const lvEasy = 49;
const lvMedium = 81;
const lvHard = 100;

btnPlay.addEventListener('click', gridGeneration);


function gridGeneration() {

    divContainer.classList.remove('container-lvEasy','container-lvMedium','container-lvHard'); //reset classi container
    divContainer.innerHTML = ''; //reset container
    
    if (selectLevelInput.value == "1") {

        for (let x = 1; x <= lvEasy; x++) {
            divNumberBox = document.createElement('div');
            divNumberBox.innerHTML = x;
            divContainer.append(divNumberBox);
            divContainer.classList.add('container-lvEasy');
        }

    } else if (selectLevelInput.value == "2") {

        for (let x = 1; x <= lvMedium; x++) {
            divNumberBox = document.createElement('div');
            divNumberBox.innerHTML = x;
            divContainer.append(divNumberBox);
            divContainer.classList.add('container-lvMedium');
        }

    } else {

        for (let x = 1; x <= lvHard; x++) {
            divNumberBox = document.createElement('div');
            divNumberBox.innerHTML = x;
            divContainer.append(divNumberBox);
            divContainer.classList.add('container-lvHard');
        }
    }
}


