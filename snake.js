import { getInputPosition } from "./input.js";

export const snakeSpeed = 5;
const snakeBody = [{ x: 10, y: 11 }]
let newSegments = 0

export function update() {
    addSegments()
    const inputPosition = getInputPosition()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputPosition.x
    snakeBody[0].y += inputPosition.y
};
export function draw(gamePad) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gamePad.appendChild(snakeElement)
    })
};

export function expandSnake(amount) {
    newSegments += amount
};

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
};

export function getHeadSnake() {
    return snakeBody[0]
};

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
};

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
};

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegments = 0
};