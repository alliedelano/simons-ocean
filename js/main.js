///CONSTANTS///

const colors = ['blue', 'green', 'yellow', 'red'];

const creatures = {
    starfish: {
        imgUrl: 'starfish img',
        animation: 'swirl',
    },
    shark: {
        imgUrl: 'shark img',
        animation: 'upDown',
    },
    stingray: {
        imgUrl: 'stingray img',
        animation: 'rightLeft'
    },
    pufferfish: {
        imgUrl: 'pufferfish img',
        animation: 'biggerSmaller'
    },
    turtle: {
        imgUrl: 'turtle img',
        animation: 'wiggle'
    },
    dolphin: {
        imgUrl: 'dolphin img',
        animation: 'upAndOver'
    },
}

const story = {
    line1: "While you were on vacation, Simon hypnotized everyone in the sea into doing whatever he says.",
    line2: "But he didn't stop there...",
    line3: "He hypnotized the sea itself into losing all of its color.",
    line4: "You just realized your best friend, Crabby McStabby, has gone missing.",
    line5: "Build a path across the reef to find Crabby!",
    line6: "The only way to break the spell and get past his army is to beat Simon at his own game, so pay attention!"
}


//STATE VARIABLES//

let playerMoves;
let lives;
let world;
let level;
let outcome;
let badGuy = {
    moves: [],
    creature: null,
    isBoss: false,
}


//CASHE ELEMENTS//
const badMsgEl = document.getElementById('bad-message');
const blueButton = document.getElementById('blue');
const greenButton = document.getElementById('green');
const yellowButton = document.getElementById('yellow');
const redButton = document.getElementById('red');
const buttonDiv = document.getElementById('next-and-outcomes');
const livesEl = document.getElementById('num-lives');

//EVENT LISTENERS//



//init//
function init(){
    playerMoves = [];
    lives = 5;
    world = 1;
    level = 1;
};



//render the start screen//
////////////start button//

//render the story screen//
function renderStory(){

}

//render the game//
function renderGame(){

}

//render the win screen//
function renderWin(){

}

//render the lose/play again screen//
function renderLoss(){

}

//FUNCTIONS

function tellStory(){
    
}

const 

