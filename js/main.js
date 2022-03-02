let divContainer = document.querySelector('.container');
let divNumberBox;


for (let x = 1; x <= 100; x++) {
    divNumberBox = document.createElement('div');    
    divNumberBox.innerHTML = x;
    divContainer.append(divNumberBox);
}