'use strict';
let rightAns = 0;
let userName = prompt('What is your name?');
alert('Hello ' + userName + ', it is a pleasure to have you here today.');


function bornHere () {
  let bornHere = prompt('Was I born on a planet other than Earth? (y/n)').toLowerCase();

  if(bornHere === 'y') {

    alert('Incorrect, I was born here on Earth.');
  } else if (bornHere === 'yes') {

    alert('Incorrect, I was born here on Earth.');
  } else if (bornHere === 'n') {

    alert('Correct, I am as Earthling as they come.');
    rightAns = (rightAns + 1);
  } else if (bornHere === 'no') {

    alert('Correct, I am as Earthling as they come.');
    rightAns = (rightAns + 1);
  } else {
    alert('Yes or no answers only please.');
  }
}

bornHere();

function myServ (){

  let myServ = prompt('Did I serve in the Space Force? (y/n)').toLowerCase();

  if(myServ === 'y') {

    alert('Wrong, the Space Force was not around then.');
  } else if (myServ === 'yes') {

    alert('Wrong, the Space Force was not around then.');
  } else if (myServ === 'n') {

    alert('Correct, I served in the Navy.');
    rightAns = (rightAns + 1);
  } else if (myServ === 'no') {

    alert('Correct, I served in the Navy.');
    rightAns = (rightAns + 1);
  } else {
    alert('Yes or no answers only please.');
  }
}

myServ();

function myJob() {

  let myJob = prompt('Did I pursue a career in the music industry? (y/n)').toLowerCase();

  if(myJob === 'y') {

    alert('Incorrect, I went back to working as a technician.');
  } else if (myJob === 'yes') {

    alert('Incorrect, I went back to working as a technician.');
  } else if (myJob === 'n') {

    alert('Correct, it was not for me.');
    rightAns = (rightAns + 1);
  } else if (myJob === 'no') {

    alert('Correct, it was not for me.');
    rightAns = (rightAns + 1);
  } else {
    alert('Yes or no answers only please.');
  }
}

myJob();

function gradSchool () {

  let gradSchool = prompt('Did I finish high-school? (y/n)').toLowerCase();

  if(gradSchool === 'y') {

    alert('Indeed I did, right at the turn of the century!');
    rightAns = (rightAns + 1);
  } else if (gradSchool === 'yes') {

    alert('Indeed I did, right at the turn of the century!');
    rightAns = (rightAns + 1);
  } else if (gradSchool === 'n') {

    alert('Incorrect. It was touch and go for a while but I did manage to earn my diploma.');
  } else if (gradSchool === 'no') {

    alert('Incorrect. It was touch and go for a while but I did manage to earn my diploma.');
  } else {
    alert('Yes or no answers only please.');
  }
}

gradSchool();

function myGoals () {

  let myGoals = prompt('Do I have any goals for my future? (y/n)').toLowerCase();

  if(myGoals === 'y') {

    alert('Correct, I intend to break stuff with my code.');
    rightAns = (rightAns + 1);
  } else if (myGoals === 'yes') {

    alert('Correct, I intend to break stuff with my code.');
    rightAns = (rightAns + 1);
  } else if (myGoals === 'n') {

    alert('Wrong, I have many things I hope to achieve.');
  } else if (myGoals === 'no') {

    alert('Wrong, I have many things I hope to achieve.');
  } else {
    alert('Yes or no answers only please.');
  }
}

myGoals();




function numberGame () {
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
}
numberGame();



function numberGame2 () {
  let pets = ['fish','snake','turtle','cat','dog','rabbit','zebra','armadillo','orangutan'];
  for(let i = 0;i < 6;i++) {
    let guessPet = prompt('What kind of animal makes for a good pet?').toLowerCase();
    let correct = false;
    for(let j = 0;j < pets.length;j++){

      if (guessPet === pets[j]) {
        alert('That is a great choice!');
        correct = true;
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
}

numberGame2();

alert('Looks like you got ' + rightAns + ' out of 7 answers correct!');
confirm('Well, ' + userName + ', may you have a splendid day and thanks for stopping by!');
