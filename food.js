let food = {x: 3, y: 17};
const INCREMENT = 1;

const initialFood = () => {
    food = {x: 3, y: 17};
}

const updateFood = () => {
    if (onSnake(food)) {
        increaseSnake(INCREMENT);
        food = generateFoodPosition();
    }
}

const drawFood = () => {
    let foodElement = document.createElement('div');
    foodElement.classList.add("food");
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    gameBoard.appendChild(foodElement);
}

const generateFoodPosition = () => {
    let notSnakePosition = [];
    for (let i = 1; i <= ncol; i++) {
        for (let j = 1; j <= nrow; j++) {
            if (! onSnake({x: i, y: j})) {
                notSnakePosition.push({x: i, y: j});
            }
        }
    }
    const pi = Math.floor(Math.random() * notSnakePosition.length);
    return notSnakePosition[pi];
}