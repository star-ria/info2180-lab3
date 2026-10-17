document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll("#board div");

    let state = Array(9).fill(null);
    let turn = "X";

    squares.forEach(square => square.classList.add("square"));

    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            square.textContent = turn;
            square.classList.add(turn);
            state[index] = turn;

            turn = turn === "X" ? "O" : "X";
        });
    });
});