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
  