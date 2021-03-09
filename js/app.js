"use strict";

let userName = prompt('What is your name?');
alert('Hello ' + userName + ", it is a pleasure to have you here today.");
let loveArt = prompt('Are you a lover of the arts? (y/n)').toLowerCase();

if(loveArt === 'y') {
    // console.log(userName + ', you love art and that is great!');
    alert(userName + ', you love art and that is great!');
} else if (loveArt === 'yes') {
    // console.log(userName + ', you love art and that is great!');
    alert(userName + ', you love art and that is great!');
} else if (loveArt === 'n') {
    // console.log(userName + ', you do not love art and that is unfortunate.');
    alert(userName + ', you do not love art and that is unfortunate.');
} else if (loveArt === 'no') {
    // console.log(userName + ', you do not love art and that is unfortunate.');
    alert(userName + ', you do not love art and that is unfortunate.');
} else {
    alert('Yes or no answers only please.')
}

let ownPets = prompt('Do you own any pets? (y/n)').toLowerCase();

if(ownPets === 'y') {
    // console.log(userName + ' likes animals. Terrific!');
    alert(userName + ' likes animals. Terrific!');
} else if (ownPets === 'yes') {
    // console.log(userName + ' likes animals. Terrific!');
    alert(userName + ' likes animals. Terrific!');
} else if (ownPets === 'n') {
    // console.log(userName + ' , you should they are beneficial to your wellbeing.');
    alert(userName + ' , you should they are beneficial to your wellbeing.');
} else if (ownPets === 'no') {
    // console.log(userName + ', you should they are beneficial to your wellbeing.');
    alert(userName + ', you should they are beneficial to your wellbeing.');
} else {
    alert('Yes or no answers only please.')
}

let eatYet = prompt('Have you eaten yet? (y/n)').toLowerCase();

if(eatYet === 'y') {
    // console.log('That means you should have plenty of energy!');
    alert('That means you should have plenty of energy!');
} else if (eatYet === 'yes') {
    // console.log('That means you should have plenty of energy!');
    alert('That means you should have plenty of energy!');
} else if (eatYet === 'n') {
    // console.log('Let us keep an eye on your blood sugar then.');
    alert('Let us keep an eye on your blood sugar then.');
} else if (eatYet === 'no') {
    // console.log('Let us keep an eye on your blood sugar then.');
    alert('Let us keep an eye on your blood sugar then.');
} else {
    alert('Yes or no answers only please.')
}

let gradSchool = prompt('Have you finished high-school? (y/n)').toLowerCase();

if(gradSchool === 'y') {
    // console.log('So you are good looking AND educated. Wow!');
    alert('So you are good looking AND educated. Wow!');
} else if (gradSchool === 'yes') {
    // console.log('So you are good looking AND educated. Wow!');
    alert('So you are good looking AND educated. Wow!');
} else if (gradSchool === 'n') {
    // console.log('You really should, it is very important.');
    alert('You really should, it is very important.');
} else if (gradSchool === 'no') {
    // console.log('You really should, it is very important.');
    alert('You really should, it is very important.');
} else {
    alert('Yes or no answers only please.')
}

let onGard = prompt('Do you have any opinions on gardening? (y/n)').toLowerCase();

if(onGard === 'y') {
    // console.log('I would love to dig into your thoughts at some point');
    alert('I would love to dig into your thoughts at some point');
} else if (onGard === 'yes') {
    // console.log('I would love to dig into your thoughts at some point');
    alert('I would love to dig into your thoughts at some point');
} else if (onGard === 'n') {
    // console.log('If that is the case then maybe I should ask you to leave.');
    alert('If that is the case then maybe I should ask you to leave.');
} else if (onGard === 'no') {
    // console.log('If that is the case then maybe I should ask you to leave.');
    alert('If that is the case then maybe I should ask you to leave.');
} else {
    alert('Yes or no answers only please.')
}
confirm('Well, ' + userName + ', may you have a splendid day and thanks for stopping by!')