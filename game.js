let renderTime = 0;

const main = (currentTime) => {
    window.requestAnimationFrame(main);
    const secondSinceRender = (currentTime - renderTime) / 1000;
    if (secondSinceRender < 1 / SNAKE_SPEED) {
        return;
    }
    renderTime = currentTime;
    // console.log(currentTime);
    update();
    draw();
}

// setInterval(main);
window.requestAnimationFrame(main);

const update = () => {
    snake_update();
}

const draw = () => {
    snake_draw();
}
