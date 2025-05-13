let inputDirection = {x: 0, y: 1};

window.addEventListener("keydown", (event) => {
    if (event.key === "arrowUp") {
        inputDirection = {x: 0, y: -1};
    } else if (event.key === "arrowDown") {
        inputDirection = {x: 0, y: 1};
    } else if (event.key === "arrowLeft") {
        inputDirection = {x: -1, y: 0};
    } else if (event.key === "arrowRight") {
        inputDirection = {x: 1, y: 0};
    }
})

const getInputDirection = () => {
    return inputDirection;
}