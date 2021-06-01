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
   for (var i=0; i< levelDots.length; i++){
       levelDots[i].className += ' level-complete';
   }
   let worldDots = document.querySelectorAll('.world');
   for (var i=0; i< worldDots.length; i++){
       worldDots[i].className += ' world-complete';
   }
}

function tellStory(){
    for (let i=0; i<story.length; i++){
        setTimeout(i=> {
            
            storyLineEl.innerText = `text is ${story[i]}`;
        }, 4000 * i, i);
    }
}

//render the game//
function renderGame(){
    //document.getElementById('story-board').remove();
   //document.getElementById('sand-story').remove();
    createGameHeader();
    createBadGuyMessage();
    createGamePlay();
}

function createGameHeader(){
    const headerEl = document.createElement('header');
    headerEl.setAttribute('id', 'top-header');
    document.body.appendChild(headerEl);
    const livesEl = document.createElement('div');
    livesEl.setAttribute('id', 'lives');
    headerEl.appendChild(livesEl);
    const livesBack = document.createElement('div');
    livesBack.setAttribute('id', 'player-image');
    livesEl.appendChild(livesBack);
    const numLivesEl = document.createElement('div');
    numLivesEl.setAttribute('id', 'num-lives');
    numLivesEl.innerText = `Lives: ${lives}`;
    livesEl.appendChild(numLivesEl);

}

function createBadGuyMessage(){
    const messageEl = document.createElement('div');
    messageEl.setAttribute('id', 'message');
    document.body.appendChild(messageEl);
    const tauntMessage = document.createElement('h3');
    tauntMessage.setAttribute('id', 'bad-message');
    messageEl.appendChild(tauntMessage);
}

function createGamePlay(){
    const gameBoard = document.createElement('section');
    gameBoard.setAttribute('id', 'game-play');
    document.body.appendChild(gameBoard);
    
    const playerControl = document.createElement('div');
    playerControl.setAttribute('id', 'player-control');
    gameBoard.appendChild(playerControl);

    const topButtons = document.createElement('div');
    topButtons.setAttribute('id', 'top-buttons');
    playerControl.appendChild(topButtons);

    const blueButtonEl = document.createElement("BUTTON");
    blueButtonEl.setAttribute('id', 'blue');
    blueButtonEl.setAttribute('class', 'color');
    blueButtonEl.classList.add('simonColor');
    topButtons.appendChild(blueButtonEl);

    const greenButtonEl = document.createElement("BUTTON");
    greenButtonEl.setAttribute('id', 'green');
    greenButtonEl.setAttribute('class', 'color');
    greenButton.classList.add('simonColor');
    topButtons.appendChild(greenButtonEl);
    
    const bottomButtons = document.createElement('div');
    bottomButtons.setAttribute('id', 'bottom-buttons')
    playerControl.appendChild(bottomButtons);

    const yellowButtonEl = document.createElement("BUTTON");
    yellowButtonEl.setAttribute('id', 'yellow');
    yellowButtonEl.setAttribute('class', 'color');
    yellowButtonEl.classList.add('simonColor');
    bottomButtons.appendChild(yellowButtonEl)

    const redButtonEl = document.createElement("BUTTON");
    redButtonEl.setAttribute('id', 'red');
    redButtonEl.setAttribute('class', 'color');
    redButtonEl.classList.add('simonColor');
    bottomButtons.appendChild(redButtonEl);

    const nextOutcomes = document.createElement('div');
    nextOutcomes.setAttribute('id', 'next-and-outcomes');
    gameBoard.appendChild(nextOutcomes);

    const opponent = document.createElement('div');
    opponent.setAttribute('id', 'opponent');
    gameBoard.appendChild(opponent);

    const sand = document.createElement('div');
    sand.setAttribute('id', 'sand');
    gameBoard.appendChild(sand);
}


//render the win screen//
function renderWin(){

}

//render the lose/play again screen//
function renderLoss(){

}

//FUNCTIONS


//generate a random array for bad guy - for loop and push
//const bad guy array = length (function of world and level)
//remember our bad guy array is badGuy.moves 
//for(let i=0; i<array length; i++){badguy.moves.push(Math.random())}
//make sure it pops up with a random move, not number

