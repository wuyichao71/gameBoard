let inputDirection = {x: 0, y: 1};

window.addEventListener("keydown", (event) => {
    // switch (event.key) {
    //     case "arrowDown":
    //         inputDirection = {x: 0, y: 1};
    //         break;
    //     case "arrowUp":
    //         inputDirection = {x: 0, y: -1};
    //         break;
    //     case "arrowLeft":
    //         inputDirection = {x: -1, y: 0};
    //         break;
    //     case "arrowRight":
    //         inputDirection = {x: 1, y: 0};
    //         break;
    // }
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