document.addEventListener("DOMContentLoaded", function() 
{
    const pauseBtn = document.getElementById("pause-btn");
    const pauseMenu = document.getElementById("pause-menu");

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") 
        {
            toggleMenu();
        }
    });

    pauseBtn.addEventListener("click", function() {
        toggleMenu();
    });

    function toggleMenu() 
    {
        if (pauseMenu.style.display === "none") 
        {
            pauseMenu.style.display = "block";
        } 
        else 
        {
            pauseMenu.style.display = "none";
        }
    }
});

window.Return = function() 
{
    const Confirm = confirm("Are you sure you want to quit the game?");
    if (Confirm)
    {
        window.location.href = "Main Page.html";
    }   
};

window.toggleMenu = function() 
{
    const pauseMenu = document.getElementById("pause-menu");
    if (pauseMenu.style.display === "none") 
    {
        pauseMenu.style.display = "block";
    } 
    else 
    {
        pauseMenu.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", function() 
{
    const audio = document.getElementById("audio");
    const volumeSlider = document.getElementById("volume-slider"); 
    audio.volume = volumeSlider.value;
    
    volumeSlider.addEventListener("input", function() 
    {
      audio.volume = volumeSlider.value;
    });
  });

  
//PLAYER VS COMPUTER JS CODE
let board = ['', '', '', '', '', '', '', '', ''];
let isPlayerTurn = true;

function checkWin(player) 
{
  const winCombinations = 
  [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
  ];

  for (const combination of winCombinations) 
  {
    if 
    (
      board[combination[0]] === player &&
      board[combination[1]] === player &&
      board[combination[2]] === player
    ) 
    {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  return board.every(cell => cell !== '');
}

function makeMove(cellIndex) 
{
  if (board[cellIndex] === '' && isPlayerTurn) 
  {
    board[cellIndex] = 'X';
    displayBoard();
    
    if (checkWin('X')) 
    {
      alert("You win!");
      resetBoard();
      return;
    }

    if (checkDraw()) 
    {
      alert("It's a draw!");
      resetBoard();
      return;
    }

    isPlayerTurn = false;
    setTimeout(makeAIMove, 500); // AI move after a slight delay
  }
}

// Function to make AI move
function makeAIMove() 
{
  // Implement the AI logic here (e.g., random move)
  const emptyCells = board.reduce((acc, cell, index) => 
  {
    if (cell === '') acc.push(index);
    return acc;
  }, []);

  if (emptyCells.length === 0) return; // Board is full

  // Randomly select an empty cell for AI's move
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const aiMove = emptyCells[randomIndex];
  board[aiMove] = 'O'; // Assume AI plays with 'O'
  isPlayerTurn = true;
  displayBoard();

  if (checkWin('O')) 
  {
    alert("AI wins!");
    resetBoard();
    return;
  }

  if (checkDraw()) 
  {
    alert("It's a draw!");
    resetBoard();
    return;
  }
}

function resetBoard() 
{
  board = ['', '', '', '', '', '', '', '', ''];
  isPlayerTurn = true;
  displayBoard();
}

function displayBoard() 
{
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = board[i];
  }
}

function toggleMenu() 
{
  const pauseMenu = document.getElementById('pause-menu');
  pauseMenu.classList.toggle('show');
}


function Return() 
{
  toggleMenu();
}

const pauseButton = document.getElementById('pause-btn');
pauseButton.addEventListener('click', toggleMenu);

const volumeSlider = document.getElementById('volume-slider');
volumeSlider.addEventListener('input', () => {
});

  