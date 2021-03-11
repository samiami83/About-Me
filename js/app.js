"use strict";
let rightAns = 0
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
    rightAns = (rightAns + 1);
} else if (bornHere === 'no') {
    // console.log('Correct, I am as Earthling as they come.');
    alert('Correct, I am as Earthling as they come.');
    rightAns = (rightAns + 1);
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
    rightAns = (rightAns + 1);
} else if (myServ === 'no') {
    // console.log('Correct, I served in the Navy.');
    alert('Correct, I served in the Navy.');
    rightAns = (rightAns + 1);
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
    rightAns = (rightAns + 1);
} else if (myJob === 'no') {
    // console.log('Correct, it was not for me.');
    alert('Correct, it was not for me.');
    rightAns = (rightAns + 1);
} else {
    alert('Yes or no answers only please.')
}

let gradSchool = prompt('Did I finish high-school? (y/n)').toLowerCase();

if(gradSchool === 'y') {
    // console.log('Indeed I did, right at the turn of the century!');
    alert('Indeed I did, right at the turn of the century!');
    rightAns = (rightAns + 1);
} else if (gradSchool === 'yes') {
    // console.log('Indeed I did, right at the turn of the century!');
    alert('Indeed I did, right at the turn of the century!');
    rightAns = (rightAns + 1);
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
    rightAns = (rightAns + 1);
} else if (myGoals === 'yes') {
    // console.log('Correct, I intend to break stuff with my code.');
    alert('Correct, I intend to break stuff with my code.');
    rightAns = (rightAns + 1);
} else if (myGoals === 'n') {
    // console.log('Wrong, I have many things I hope to achieve.');
    alert('Wrong, I have many things I hope to achieve.');
} else if (myGoals === 'no') {
    // console.log('Wrong, I have many things I hope to achieve.');
    alert('Wrong, I have many things I hope to achieve.');
} else {
    alert('Yes or no answers only please.')
}

let counter = 0;
while(counter < 4) {
    let guessNum = parseInt(prompt('Now, can you please guess a number 1-10?'));
    if (guessNum < 7) {
        alert('No. That is too low. Try again.');
        counter += 1;
    } else if (guessNum > 7) {
        alert('No. That is too high. Try again.');
        counter += 1;
    } else if (guessNum === 7) {
        alert('You got it! Lucky number 7!!!');
        rightAns = (rightAns + 1);
        break;
    }
    if (counter === 4) {
        alert('You have exhausted your guesses, sorry.');
    }
}

let pets = ["fish",'snake','turtle','cat','dog','rabbit','zebra','armadillo','orangutan'];
for(let i = 0;i < 6;i++) {
    let guessPet = prompt('What kind of animal makes for a good pet?').toLowerCase();
    let correct = false
    for(let j = 0;j < pets.length;j++){
        
        if (guessPet === pets[j]) {
            alert('That is a great choice!');
            correct = true
            rightAns = (rightAns + 1);
            break;
        }
    }
    if (correct === true) {
        break;
    }
    alert('Sorry, guess again.');
}
alert('Possible correct answers include ' + pets);

alert('Looks like you got ' + rightAns + ' out of 7 answers correct!');
confirm('Well, ' + userName + ', may you have a splendid day and thanks for stopping by!');