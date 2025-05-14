const gameBoard = document.getElementById("game-board");
const style = window.getComputedStyle(gameBoard);
const columnsTemplate = style.gridTemplateColumns;
const rowsTemplate = style.gridTemplateRows;
const ncol = columnsTemplate.split(/\s+/).length;
const nrow = rowsTemplate.split(/\s+/).length;
const colCenter = (ncol + 1) / 2;
const rowCenter = (nrow + 1) / 2;