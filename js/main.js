///CONSTANTS///

const colors = ['blue', 'green', 'yellow', 'red'];

const creatures = {
    starfish: {
        imgUrl: 'starfish img',
        animation: 'swirl',
        message: "don't mess with the starfish",
    },
    shark: {
        imgUrl: 'shark img',
        animation: 'upDown',
        message: "sharks can do anything"
    },
    stingray: {
        imgUrl: 'stingray img',
        animation: 'rightLeft',
        message: "Don't mess up or I'll sting you!"
    },
    pufferfish: {
        imgUrl: 'pufferfish img',
        animation: 'biggerSmaller',
        message: "I'll huff and I'll puff and I'll blow you away"
    },
    turtle: {
        imgUrl: 'turtle img',
        animation: 'wiggle',
        message: "you'll leave shell-shocked!"
    },
    dolphin: {
        imgUrl: 'dolphin img',
        animation: 'upAndOver',
        message: "see if you can keep up!"
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
let badGuyMoves;
let lives;
let world;
let level;
let levelWithinWorld;
let outcome;
let badGuyCreature;


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
    badGuyMoves = [];
    lives = 5;
    world = 1;
    level = 1;
    renderGame()
};



//render the start screen//
////////////start button//

//my shortcut function --- DELETE LATER
function devSkip(){
    renderStory();
    init();
}

function renderStart(){
    const beginMsg = document.createElement('div');
    beginMsg.innerHTML = "Simon Game. Press Start to Begin";
}

//render the story screen//
function renderStory(){
    blankCanvas();
    createStoryBoard();
    skipIntro();
    colorAllLevels();
    tellStory();
}

function createStoryBoard(){
    const storyBoard = document.createElement('div');
    storyBoard.setAttribute('id', 'story-board');
    document.body.appendChild(storyBoard, reefPath);

    const storyLineEl = document.createElement('h2');
    storyLineEl.setAttribute('id', 'story-line');
    storyBoard.appendChild(storyLineEl);

    const sand = document.createElement('div');
    sand.setAttribute('id', 'sand-story');
    document.body.appendChild(sand, reefPath);
}

function skipIntro(){
    const skipIntroButton = document.createElement("BUTTON");
    skipIntroButton.id = 'skip-intro';
    skipIntroButton.innerText = 'skip intro';
    const sandEl = document.getElementById('sand-story');
    sandEl.appendChild(skipIntroButton);
    skipIntroButton.addEventListener('click', init);
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

function unColorAllLevels(){
    let levelDots = document.querySelectorAll('.level');
    for (var i=0; i< levelDots.length; i++){
        levelDots[i].classList.remove('level-complete');
        levelDots[i].classList.add('level-incomplete');
    }
    let worldDots = document.querySelectorAll('.world');
    for (var i=0; i< worldDots.length; i++){
        worldDots[i].classList.remove('world-complete');
        worldDots[i].classList.add('world-incomplete');
    }
}

function tellStory(){
    const storyLine = document.getElementById('story-line');
    for (let i=0; i<story.length; i++){
        setTimeout(i=> {
        storyLine.innerText = `${story[i]}`;
        }, 3000 * i, i);
    }
    setTimeout(function(){
        document.body.style.backgroundColor = '#F6F6F6';
        document.getElementById('sand-story').style.backgroundColor = '#DDDDDD';
        document.getElementById('level-journey').style.backgroundColor = '#BFBFC0';
        storyLine.style.color = '#000000'
        unColorAllLevels();
    }, 6000);
    setTimeout(function(){
        const startButtonEl = document.createElement('BUTTON');
        startButtonEl.id = 'start';
        startButtonEl.innerText = 'start';
        const storyBoardEl = document.getElementById('story-board');
        storyBoardEl.appendChild(startButtonEl);
        startButtonEl.addEventListener('click', init)
    }, 16000);
}

function renderGame(){
    document.getElementById('story-board').remove();
    document.getElementById('sand-story').remove();
    createGameHeader();
    createBadGuyMessage();
    createGamePlay();
    document.getElementById('world-1').style.backgroundColor = '#10FDC4';
    document.getElementById('level-1-1').style.backgroundColor = '#F9C3FA';
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
    document.body.style.backgroundColor = '#F6F6F6';
    document.getElementById('level-journey').style.backgroundColor = '#BFBFC0';
    unColorAllLevels();
    
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
    sand.style.backgroundColor = '#DDDDDD';
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


function worldUp(){
    if (level % 4 === 0){
        world += 1;
        let worldId = `world-${world}`;
        document.getElementById(worldId).style.backgroundColor = '#10FDC4';
        console.log(world);
    }
}

function levelUp(){
    level += 1
    let levelWithinWorld = level % 4 + 1;
    let levelId = `level-${world}-${levelWithinWorld}`;
    document.getElementById(levelId).style.backgroundColor = '#F9C3FA';
    console.log(level);
    console.log(levelWithinWorld);
    console.log(levelId);
    worldUp();
}


function renderLevel(){
    createBadGuy();
    createBadGuyMoves();
}

function createBadGuy(){
    let creatureArray = ['starfish', 'shark', 'stingray', 'pufferfish', 'turtle', 'dolphin'];
    randomCreature = creatureArray[Math.floor(Math.random()*6)];
    const badGuyEl = document.createElement('div');
    badGuyEl.innerText = `${randomCreature} image`;
    const opponentEl = document.getElementById('opponent');
    opponentEl.appendChild(badGuyEl);
    const tauntMsgEl = document.getElementById('bad-message');
    tauntMsgEl.innerText = `${creatures[randomCreature].message}`;
}

function createBadGuyMoves(){
    let levelWithinWorld = level % 4 + 1;
    let movesNum = world * levelWithinWorld + 1;
    for (let i=0; i< movesNum; i++){
        badGuyChoice = colors[Math.floor(Math.random()*4)];
        badGuyMoves.push(badGuyChoice);
    }
    return badGuyMoves;
}

////// GAME PLAY ///

//start game -->
// -- generate bad guy with moves
// -- display moves
// -- player moves
// -- compare moves
// -- if right, level up --> see if new world
// -- if wrong, subtract a life, render level again using same values;


