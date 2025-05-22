let lastRenderTime = 0;
let gameOver = false;

const main = (currentTime) => {
    if (gameOver) {
        showGameOver();
        return;
    }
    window.requestAnimationFrame(main);
    const secondSinceRender = (currentTime - lastRenderTime) / 1000;
    if (secondSinceRender < 1 / SNAKE_SPEED) {
        return;
    }
    lastRenderTime = currentTime;
    update();
    if (gameOver) {
        return;
    }
    draw();
}

const showGameOver = () => {
    // let messege = document.createElement('p');
    // messege.classList.add("end-text");
    gameBoard.innerHTML = "";
    gameBoard.innerText = "The Snake is dead!";
    gameBoard.className = "";
    gameBoard.classList.add("end-game-board");
    // gameBoard.appendChild(messege);
}

// setInterval(main);
const startGame = () => {
    initialGameBoard();
    initialSnake();
    initialFood();
    initialInputDirection();
    initialGameOver();
    window.requestAnimationFrame(main);
}

const initialGameBoard = () => {
    gameBoard.className = "";
    gameBoard.classList.add("game-board");
}

const update = () => {
    updateSnake();
    gameOver = isGameOver();
    updateFood();
}

const draw = () => {
    gameBoard.innerHTML = "";
    drawSnake();
    drawFood();
}

const initialGameOver = () => {
    gameOver = false;
}
const isGameOver = () => {
    return isSnakeOutOfBound() || isSnakeOnSelf();
}
