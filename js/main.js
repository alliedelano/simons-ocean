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
};

const story = [
    "While you were on vacation, Simon hypnotized everyone in the sea into doing whatever he says.",
    "But he didn't stop there...",
    "He hypnotized the sea itself into losing all of its color.",
    "You just realized your best friend, Crabby McStabby, has gone missing.",
    "Build a path across the reef to find Crabby!",
    "The only way to break the spell and get past his army is to beat Simon at his own game, so pay attention!"
];


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
const reefPath = document.getElementById('level-journey');
const storyLineEl = document.getElementById('story-line')

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

function renderStart(){
    const beginMsg = document.createElement('div');
    beginMsg.innerHTML = "Simon Game. Press Start to Begin";
}

//render the story screen//
function renderStory(){
    blankCanvas();
    createStoryBoard();
    colorAllLevels();
    tellStory();
}

function createStoryBoard(){
    const storyBoard = document.createElement('div');
    storyBoard.setAttribute('id', 'story-board');
    document.body.appendChild(storyBoard, reefPath);
    const storyLine = document.createElement('h2');
    storyLine.setAttribute('id', 'story-line');
    storyBoard.appendChild(storyLine);
    const sand = document.createElement('div');
    sand.setAttribute('id', 'sand-story');
    document.body.appendChild(sand, reefPath);
}

function blankCanvas(){
    document.getElementById('top-header').remove();
    document.getElementById('message').remove();
    document.getElementById('game-play').remove();
}

function colorAllLevels(){
   let levelDots = document.querySelectorAll('.level');
   for (dot in levelDots){
       //dot.classList.('level-complete');
   }
   let worldDots = document.querySelectorAll('.world');
   for (dot in worldDots){
       //dot.classList.add('world-complete');
   }
}

function tellStory(){
    for (let i=0; i<story.length; i++){
        setTimeout(i=> {
           storyLineEl.innerText = `${story[i]}`;
        }, 4000 * i);
    }
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




