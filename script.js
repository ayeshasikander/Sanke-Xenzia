import { snakeSpeed, update as updateSnake, draw as drawSnake, getHeadSnake, snakeIntersection } from './snake.js';
import { outsideGrid } from './grid.js';
import { update as updateFood, draw as drawFood } from './food.js';

let lastTime = 0;
let gameOver = false;
let score = 0;
let pause = false;


const gamePad = document.getElementById('main-board');
const overSound = document.getElementById("gameover");
const scoreElement = document.getElementById("score");

function main(currentTime) {
    if (gameOver) {
        overSound.play();
        if (confirm('Game Over')) window.location.reload();
        return;
    };

    if (pause) {
        window.requestAnimationFrame(main);
        return
    };

    window.requestAnimationFrame(main);
    const secondsLastRender = (currentTime - lastTime) / 1000;
    if (secondsLastRender < 1 / snakeSpeed) return;
    lastTime = currentTime;

    update();
    draw();
};

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    deathState();
};

function draw() {
    gamePad.innerHTML = "";
    drawSnake(gamePad);
    drawFood(gamePad);
    updateScore();
};

function deathState() {
    gameOver = outsideGrid(getHeadSnake()) || snakeIntersection();
}

function updateScore() {
    scoreElement.textContent = score.toString();
}

export function increaseScore() {
    score += 2;
    updateScore();
}

window.addEventListener("keydown", e => {
    if (e.key === ' ' || e.key.toLowerCase() === 'space') {
        pause = !pause;
        if (pause) {
            alert('Game paused')
        } else {
            alert('Game resumed')
        }
    }
});

alert("Press space to pause the game");
