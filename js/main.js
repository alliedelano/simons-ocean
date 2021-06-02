///CONSTANTS///

const colors = ['blue', 'green', 'yellow', 'red'];

const creatures = {
    starfish: {
        imgUrl: 'imgs/starfish.png',
        animation: 'swirl',
        message: "don't mess with the starfish",
    },
    shark: {
        imgUrl: 'imgs/shark.png',
        animation: 'upDown',
        message: "sharks can do anything"
    },
    stingray: {
        imgUrl: 'imgs/stingray.png',
        animation: 'rightLeft',
        message: "Don't mess up or I'll sting you!"
    },
    pufferfish: {
        imgUrl: 'imgs/pufferfish.png',
        animation: 'biggerSmaller',
        message: "I'll huff and I'll puff and I'll blow you away"
    },
    turtle: {
        imgUrl: 'imgs/turtle.png',
        animation: 'wiggle',
        message: "you'll leave shell-shocked!"
    },
    dolphin: {
        imgUrl: 'imgs/dolphin.png',
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
const playerSpace = document.getElementById('next-and-outcomes');

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
    document.getElementById('level-1-1').style.backgroundColor = '#F9C3FA';
    renderLevel();
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

    const playerMsgEl = document.createElement('h2');
    playerMsgEl.setAttribute('id', 'player-message');
    playerMsgEl.innerText = "it's easy - just watch them and do what they do. ready?";
    nextOutcomes.append(playerMsgEl);

    const readyButton = document.createElement('BUTTON');
    readyButton.id = 'ready';
    readyButton.innerText = 'ready!';
    nextOutcomes.append(readyButton);
    readyButton.addEventListener('click', simonMove)

    const opponent = document.createElement('div');
    opponent.setAttribute('id', 'opponent');
    gameBoard.appendChild(opponent);

    const badGuyImg = document.createElement('div');
    badGuyImg.setAttribute('id', 'bad-guy-img');
    opponent.appendChild(badGuyImg);

    const sand = document.createElement('div');
    sand.setAttribute('id', 'sand');
    gameBoard.appendChild(sand);
    sand.style.backgroundColor = '#DDDDDD';
}

//render the versus Simon screen
function renderFinalBoss(){
    console.log("oh shit it's simon")
    //your controller moves to the side
    //there is a new simon with buttons that light up
    //according to simon color
}

//render the win screen//
function renderWin(){
    console.log('you won the game and beat simon!')
// can start with the storyboard screen
}

//render the lose/play again screen//
function renderLoss(){
    console.log('no more lives - you lost the game')
// can start with the storyboard screen
}

//FUNCTIONS

function levelUp(){
    level += 1
    let levelWithinWorld;
    if (level % 5 != 0){
        levelWithinWorld = level % 5;
        world = Math.trunc(level/5) + 1;
        let levelId = `level-${world}-${levelWithinWorld}`;
        document.getElementById(levelId).style.backgroundColor = '#F9C3FA';
        colorWorld();
    } else {
        levelWithinWorld = 5;
        world = level/5;
        let worldId = `world-${world}`;
        document.getElementById(worldId).style.backgroundColor = '#10FDC4';
    }
}

function colorWorld(){
    if (world === 2){
        document.getElementById('level-journey').style.backgroundColor = "#04019C";
    } else if (world === 3){
        document.getElementById('sand').style.backgroundColor = "#F2EBAC";
    } else if (world === 4){
        document.body.style.backgroundColor = "#ECFFFF"
    } else {
        console.log('nothing to see here');
    }
}

function renderLevel(){
    createBadGuy();
    createBadGuyMoves();
}

function createBadGuy(){
    let creatureArray = ['starfish', 'shark', 'stingray', 'pufferfish', 'turtle', 'dolphin'];
    randomCreature = creatureArray[Math.floor(Math.random()*6)];
    const badGuyEl = document.getElementById('opponent')
    badGuyEl.innerHTML = `<img src=${creatures[randomCreature].imgUrl}>`;
    const tauntMsgEl = document.getElementById('bad-message');
    tauntMsgEl.innerText = `${creatures[randomCreature].message}`;
}

function createBadGuyMoves(){
    badGuyMoves = [];
    let levelWithinWorld;
    if (level % 5 != 0){
        levelWithinWorld = level % 5;
        world = Math.trunc(level/5) + 1;
    } else {
        levelWithinWorld = 5;
        world = level/5;
    }
    let movesMax = world + levelWithinWorld;
    for (let i=0; i < movesMax; i++){
        badGuyChoice = colors[Math.floor(Math.random()*4)];
        badGuyMoves.push(badGuyChoice);
        console.log(world, levelWithinWorld);
    }
    return badGuyMoves;
}

function simonMove(){
    setTimeout(function(){
        document.getElementById('ready').remove();
        document.getElementById('player-message').innerText = 'here they go...'
        playerMoves = [];
        for(move in badGuyMoves){
            moveEl = document.getElementById(badGuyMoves[move]);
            moveElClasses = moveEl.classList;
            if (moveElClasses.contains('active')){
                moveEl.classList.remove('active');
            }
        }
    }, 200);
    setTimeout(function(){
        simonDisplays();
    }, 1500);
}

function simonDisplays(){
    for (i=0; i< badGuyMoves.length; i++){
        setTimeout(i=> {
            moveEl = document.getElementById(badGuyMoves[i]);
            moveElClasses = moveEl.classList;
            moveEl.classList.add('active');
            setTimeout(i=> {
                moveEl.classList.remove('active')
            }, 500 * i, i);
        }, 2000 * i, i)
    }
    setTimeout(function(){
        document.getElementById('player-message').innerText = 'your turn!';
        addButtonListeners();
    }, 2000 * badGuyMoves.length);
}

function addButtonListeners(){
    document.getElementById('blue').addEventListener('click', playerMove);
    document.getElementById('green').addEventListener('click', playerMove);
    document.getElementById('yellow').addEventListener('click', playerMove);
    document.getElementById('red').addEventListener('click', playerMove);
}

function removeButtonListeners(){
    document.getElementById('blue').removeEventListener('click', playerMove);
    document.getElementById('green').removeEventListener('click', playerMove);
    document.getElementById('yellow').removeEventListener('click', playerMove);
    document.getElementById('red').removeEventListener('click', playerMove)
}

function createReadyButton(){
    const readyButton = document.createElement('BUTTON');
    readyButton.id = 'ready';
    readyButton.innerText = 'ready!';
    const nextOutcomes = document.getElementById('next-and-outcomes');
    nextOutcomes.append(readyButton);
    readyButton.addEventListener('click', simonMove)
}

function playerMove(){
    playerMoves.push(this.id);
    compareMoves()
}

function compareMoves(){
    for (move in playerMoves){
        if (playerMoves[move] === badGuyMoves[move] && playerMoves.length != badGuyMoves.length){
            console.log('not long enough yet!');
        } else if (playerMoves[move] != badGuyMoves[move]) {
            wrongSequence();
        }
    }
    if (playerMoves[move] === badGuyMoves[move] && playerMoves.length === badGuyMoves.length){
        youDidIt();
    }
}

function youDidIt(){
    setTimeout(function(){
        document.getElementById('player-message').innerText = 'nice job!'
        removeButtonListeners();
    }, 200);
    setTimeout(function(){
        levelUp();
        renderLevel();
        document.getElementById('player-message').innerText = 'another bad guy! ready?'
        createReadyButton();
    }, 2000)
}

function wrongSequence(){
    removeButtonListeners();
    document.getElementById('player-message').innerText = "bummer. that wasn't quite it. want to try again?";
    loseALife();
    const replayLevelButton = document.createElement("BUTTON");
    replayLevelButton.id = 'replay';
    replayLevelButton.innerText = 'sure!';
    const nextOutcomes = document.getElementById('next-and-outcomes');
    nextOutcomes.append(replayLevelButton);
    replayLevelButton.addEventListener('click', replayLevel);
}

function loseALife(){
    lives -= 1;
    document.getElementById('num-lives').innerText = `Lives: ${lives}`;
    checkForLoss();
}

function checkForLoss(){
    if(lives < 0){
        renderLoss()
    }
}

function replayLevel(){
    document.getElementById('replay').remove()
    createReadyButton();
    renderLevel();
    document.getElementById('player-message').innerText = 'another bad guy! ready?'
}

////// GAME PLAY ///

//start game --> COMPLETE
// -- generate bad guy with moves - COMPLETE
// -- display moves
// -- player moves
// -- compare moves
// -- if right, level up --> see if new world
// -- if wrong, subtract a life, render level again using same values;
// -- if world = 5, you play Simon
// add styling for each world

