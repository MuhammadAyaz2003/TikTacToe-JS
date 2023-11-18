// console.log("Welcome to Tic Tac Toe");
// // let music = new Audio ('music.mp3')
// // let audioTurn = new Audio ('ting.mp3')
// // let gameover = new Audio ('gameover.mp3')
// let turn = 'X';
// let filledBoxes = Array(9).fill(false);

// // Function  to change the turn 
// const changeTurn = (()=>{
//     return turn === "X" ? "0" : "X" 

// })


// // Function to check for a win 

// const checkWin = (()=>{
//     let boxtexts = document.querySelector(".boxtext")
//     let wins = [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6],
//     ]
    
// })

// // Game Logic 
// let boxes = document.querySelectorAll(".box");
// let boxText = document.querySelector(".boxtext");
// boxes.forEach((elem)=>{
//     elem.addEventListener('click', function(val){
//         if(filledBoxes[index]){
//             val.target.innerHTML = turn
//             filledBoxes[index] = true
//             turn = changeTurn()
//             document.querySelector('.info').innerText ="Turn for : " + turn
//             // checkWin();
//         }
        
//     })
// })



console.log("Welcome to Tic Tac Toe");

let turn = 'X';
let filledBoxes = Array(9).fill(false);
let gameContainer = document.querySelector('.gameContainer')

// Function to change the turn
const changeTurn = () => {
    return turn === 'X' ? 'O' : 'X';
}



// Game Logic
let boxes = document.querySelectorAll(".box");
let info = document.querySelector('.info');

boxes.forEach((elem, index) => {
    elem.addEventListener('click', function () {
        if (!filledBoxes[index]) {
            elem.innerHTML = turn;
            filledBoxes[index] = true;
            turn = changeTurn();
            info.innerText = "Turn for: " + turn;
            // After each move, check for a win or a draw.
            checkWin();
        }
    });
});

// Function to check for a win

const checkWin = () => {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let win of wins) {
        const [a, b, c] = win;
        if (filledBoxes[a] && filledBoxes[b] && filledBoxes[c]) {
            if (boxes[a].innerText === boxes[b].innerText && boxes[b].innerText === boxes[c].innerText) {
                // A player has won
                // info.innerText = "Player " + boxes[a].innerText + " wins!";
                gameContainer.innerText = "Player " + boxes[a].innerText + " wins!";
                return;
            }
        }
    }

    // Check for a draw
    if (filledBoxes.every(box => box === true)) {
        gameContainer.innerText = "It's a draw"
    }
}

// Reset the game
document.getElementById('reset').addEventListener('click', function () {
    filledBoxes = Array(9).fill(false);
    boxes.forEach(box => box.innerText = '');
    info.innerText = "Turn for: X";
});






