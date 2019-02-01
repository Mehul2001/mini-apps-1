let playerCount = 0;

let player = function () {
    if (playerCount % 2 === 0) {
        return 'X';
    } else {
        return 'O';
    }
};

const squareButton = [...document.getElementsByClassName('square')];
for (let i = 0; i < squareButton.length; i++) {
    squareButton[i].addEventListener('click', event => {
        squareButton[i].innerHTML = `<h1>${player()}</h1>`;
        playerCount++;
    })
}

var reset = document.querySelector('button');
reset.addEventListener('click', event => {
    for (let i = 0; i < squareButton.length; i++) {
        squareButton[i].innerHTML = '';
    }
}); 