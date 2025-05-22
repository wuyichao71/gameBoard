const equalPosition = (pos1, pos2) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

const outOfBound = (position) => {
    return position.x < 1 || position.x > ncol || 
    position.y < 1 || position.y > nrow;
}