let renderTime = 0;
let SNAKE_SPEED = 2;

const main = (currentTime) => {
    window.requestAnimationFrame(main);
    const secondSinceRender = (currentTime - renderTime) / 1000;
    if (secondSinceRender < 1 / SNAKE_SPEED) {
        return;
    }
    renderTime = currentTime;
    console.log(currentTime);
    update();
    draw();
}

// setInterval(main);
window.requestAnimationFrame(main);

const update = () => {
}

const draw = () => {
    let board = document.getElementById('game-board');
    board.innerHTML = "";
    let aDiv = document.createElement('div');
    aDiv.style.background = 'red';
    board.appendChild(aDiv);
}
