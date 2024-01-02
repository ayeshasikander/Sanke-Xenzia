// import { onSnake, expandSnake } from "./snake.js";
// import { randomGridPosition } from "./grid.js";
// import { increaseScore } from "./script.js";

// let food = getRandomPosition()
// const expandRate = 1
// let foodCounter=0;
// export function update() {
//     if (onSnake(food)) {
//         expandSnake(expandRate)
//         food = getRandomPosition();
//         foodCounter++;
//         score += 2 * foodCounter;
//         increaseScore();
//     }
//  }

// export function draw(gamePad) {
//     const snakeFood = document.createElement('div')
//     snakeFood.style.gridRowStart = food.y
//     snakeFood.style.gridColumnStart = food.x
//     snakeFood.classList.add('food')
//     gamePad.appendChild(snakeFood)
// }

// function getRandomPosition() {
//     let newFoodPosition
//     while (newFoodPosition == null || onSnake(newFoodPosition)) {
//         newFoodPosition = randomGridPosition()
//     }
//     return newFoodPosition
// }

import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
import { increaseScore } from "./script.js";

let food = getRandomPosition()
const expandRate = 1
let foodCounter = 0;

export function update(score) {
    if (onSnake(food)) {
        expandSnake(expandRate)
        food = getRandomPosition();
        foodCounter++;
        score += 2 * foodCounter;
        increaseScore(score);
    }
}

export function draw(gamePad) {
    const snakeFood = document.createElement('div')
    snakeFood.style.gridRowStart = food.y
    snakeFood.style.gridColumnStart = food.x
    snakeFood.classList.add('food')
    gamePad.appendChild(snakeFood)
}

function getRandomPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
