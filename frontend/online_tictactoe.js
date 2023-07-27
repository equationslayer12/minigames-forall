let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(cellIndex)
{
  if (board[cellIndex] === '') 
  {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function()
    {
        board[cellIndex] = 'X';
        displayBoard();
    }
    xhttp.open("GET", "move.txt", true);
    xhttp.send();   
  }
}