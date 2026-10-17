document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameBtn = document.querySelector(".btn");

    const originalStatus = status.textContent;
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    let state = Array(9).fill(null);
    let turn = "X";
    let gameOver = false;

    squares.forEach(square => square.classList.add("square"));

    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            if (gameOver || state[index] !== null) return;

            square.textContent = turn;
            square.classList.add(turn);
            state[index] = turn;

            if (checkWinner(turn)) {
                status.textContent = `Congratulations! ${turn} is the Winner!`;
                status.classList.add("you-won");
                gameOver = true;
                return;
            }

            turn = turn === "X" ? "O" : "X";
        });

        square.addEventListener("mouseover", () => square.classList.add("hover"));
        square.addEventListener("mouseout", () => square.classList.remove("hover"));
    });

    function checkWinner(player) {
        return winningCombinations.some(combination => 
            combination.every(index => state[index] === player));
    }

    newGameBtn.addEventListener("click", () => {
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });
        state = Array(9).fill(null);
        turn = "X";
        gameOver = false;
        status.textContent = originalStatus;
        status.classList.remove("you-won");
    });
});