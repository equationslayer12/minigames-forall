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
  
  

let board = ['', '', '', '', '', '', '', '', ''];
let clientShape = this.responseText;

function makeMove(cellIndex) 
{
    if (board[cellIndex] === '') 
    {
       

      const xhttp = new XMLHttpRequest();
      xhttp.onload = function() 
      {
        if (this.status === 200)
        {  
            retrieveShape();
            board[cellIndex] = clientShape;
            displayBoard();       
        } 
        else
        {
            alert("An error occurred. Please try again later");
        }
      };
      xhttp.open("GET", "move.txt?cellIndex=" + cellIndex, true);
      xhttp.send();
    }
}

function retrieveShape()
{
    const shape = new XMLHttpRequest();
    shape.onload = function()
    {
        if(this.status === 200)
        {
            clientShape = this.responseText;
        }
    }
}

function displayBoard() 
{
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) 
    {
      cells[i].textContent = board[i];
    }
}
  