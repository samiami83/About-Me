"use strict";

let guessColor = prompt('Guess a color, any color.');
switch (guessColor.toLowerCase()) {
    case ('blue'):
        alert('Good guess!');
        break;
    case ('red'):
        alert('Wrong!');
        break;
    case ('yellow'):
        alert('Wrong!');
        break;
    default:
        alert('Quit making up colors!');
}