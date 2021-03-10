"use strict";

let userName = prompt('What is your name?');
alert('Hello ' + userName + ", it is a pleasure to have you here today.");
let bornHere = prompt('Was I born on a planet other than Earth? (y/n)').toLowerCase();

if(bornHere === 'y') {
    // console.log('Incorrect, I was born here on Earth.');
    alert('Incorrect, I was born here on Earth.');
} else if (bornHere === 'yes') {
    // console.log('Incorrect, I was born here on Earth.');
    alert('Incorrect, I was born here on Earth.');
} else if (bornHere === 'n') {
    // console.log('Correct, I am as Earthling as they come.');
    alert('Correct, I am as Earthling as they come.');
} else if (bornHere === 'no') {
    // console.log('Correct, I am as Earthling as they come.');
    alert('Correct, I am as Earthling as they come.');
} else {
    alert('Yes or no answers only please.')
}

let myServ = prompt('Did I serve in the Space Force? (y/n)').toLowerCase();

if(myServ === 'y') {
    // console.log('Wrong, the Space Force was not around then.');
    alert('Wrong, the Space Force was not around then.');
} else if (myServ === 'yes') {
    // console.log('Wrong, the Space Force was not around then.');
    alert('Wrong, the Space Force was not around then.');
} else if (myServ === 'n') {
    // console.log('Correct, I served in the Navy.');
    alert('Correct, I served in the Navy.');
} else if (myServ === 'no') {
    // console.log('Correct, I served in the Navy.');
    alert('Correct, I served in the Navy.');
} else {
    alert('Yes or no answers only please.')
}

let myJob = prompt('Did I pursue a career in the music industry? (y/n)').toLowerCase();

if(myJob === 'y') {
    // console.log('Incorrect, I went back to working as a technician.');
    alert('Incorrect, I went back to working as a technician.');
} else if (myJob === 'yes') {
    // console.log('Incorrect, I went back to working as a technician.');
    alert('Incorrect, I went back to working as a technician.');
} else if (myJob === 'n') {
    // console.log('Correct, it was not for me.');
    alert('Correct, it was not for me.');
} else if (myJob === 'no') {
    // console.log('Correct, it was not for me.');
    alert('Correct, it was not for me.');
} else {
    alert('Yes or no answers only please.')
}

let gradSchool = prompt('Did I finish high-school? (y/n)').toLowerCase();

if(gradSchool === 'y') {
    // console.log('Indeed I did, right at the turn of the century!');
    alert('Indeed I did, right at the turn of the century!');
} else if (gradSchool === 'yes') {
    // console.log('Indeed I did, right at the turn of the century!');
    alert('Indeed I did, right at the turn of the century!');
} else if (gradSchool === 'n') {
    // console.log('Incorrect. It was touch and go for a while but I did manage to earn my diploma.');
    alert('Incorrect. It was touch and go for a while but I did manage to earn my diploma.');
} else if (gradSchool === 'no') {
    // console.log('Incorrect. It was touch and go for a while but I did manage to earn my diploma.');
    alert('Incorrect. It was touch and go for a while but I did manage to earn my diploma.');
} else {
    alert('Yes or no answers only please.')
}

let myGoals = prompt('Do I have any goals for my future? (y/n)').toLowerCase();

if(myGoals === 'y') {
    // console.log('Correct, I intend to break stuff with my code.');
    alert('Correct, I intend to break stuff with my code.');
} else if (myGoals === 'yes') {
    // console.log('Correct, I intend to break stuff with my code.');
    alert('Correct, I intend to break stuff with my code.');
} else if (myGoals === 'n') {
    // console.log('Wrong, I have many things I hope to achieve.');
    alert('Wrong, I have many things I hope to achieve.');
} else if (myGoals === 'no') {
    // console.log('Wrong, I have many things I hope to achieve.');
    alert('Wrong, I have many things I hope to achieve.');
} else {
    alert('Yes or no answers only please.')
}
confirm('Well, ' + userName + ', may you have a splendid day and thanks for stopping by!')