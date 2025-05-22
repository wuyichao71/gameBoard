let inputDirection = {x: 0, y: 1};
let lastInputDirection = {};

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && lastInputDirection.x !== 0) {
        inputDirection = {x: 0, y: -1};
    } else if (event.key === "ArrowDown" && lastInputDirection.x != 0) {
        inputDirection = {x: 0, y: 1};
    } else if (event.key === "ArrowLeft" && lastInputDirection.y != 0) {
        inputDirection = {x: -1, y: 0};
    } else if (event.key === "ArrowRight" && lastInputDirection.y != 0) {
        inputDirection = {x: 1, y: 0};
    }
})

// window.addEventListener("pointerdown", event => {
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight / 2;
//     if (lastInputDirection.x !== 0) {
//         if (event.clientY > centerY) {
//             inputDirection = {x: 0, y: 1};
//         } else {
//             inputDirection = {x: 0, y: -1};
//         }
//     } else if (lastInputDirection.y != 0) {
//         if (event.clientX < centerX) {
//             inputDirection = {x: -1, y: 0};
//         } else {
//             inputDirection = {x: 1, y: 0};
//         }
//     }
//     const showPos = document.getElementById("show-pos");
//     showPos.innerText = `centerX: ${centerX}; centerY: ${centerY}\nclientX: ${event.clientX}; clientY: ${event.clientY}`;
// })

const upDirection = () => {
    if (lastInputDirection.x != 0) {
        inputDirection = {x: 0, y: -1};
    }
}

const rightDirection = () => {
    if (lastInputDirection.y != 0) {
        inputDirection = {x: 1, y: 0};
    }
}

const downDirection = () => {
    if (lastInputDirection.x != 0) {
        inputDirection = {x: 0, y: 1};
    }
}

const leftDirection = () => {
    if (lastInputDirection.y != 0) {
        inputDirection = {x: -1, y: 0};
    }
}

const getInputDirection = () => {
    lastInputDirection = inputDirection;
    return inputDirection;
}

const initialInputDirection = () => {
    inputDirection = {x: 0, y: 1};
}