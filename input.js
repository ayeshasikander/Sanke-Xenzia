let inputPosition = { x: 0, y: 0 }
let lastInputPosition = { x: 0, y: 0 }

window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            if (inputPosition.y !== 0) break
            inputPosition = { x: 0, y: -1 }
            break
        case "ArrowDown":
            if (inputPosition.y !== 0) break
            inputPosition = { x: 0, y: 1 }
            break
        case "ArrowLeft":
            if (inputPosition.x !== 0) break
            inputPosition = { x: -1, y: 0 }
            break
        case "ArrowRight":
            if (inputPosition.x !== 0) break
            inputPosition = { x: 1, y: 0 }
            break
    }
})
export function getInputPosition() {
    lastInputPosition = inputPosition
    return inputPosition
}