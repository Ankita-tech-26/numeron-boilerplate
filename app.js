// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
document.addEventListener("DOMContentLoaded", function() {
    // Define variables to store game elements
    const playButton = document.getElementById("play-button");
    const gameCover = document.querySelector(".game-cover");
    const gameBoard = document.querySelector(".game-board");
  
    // Add event listener to the play button
    playButton.addEventListener("click", function() {
      // Hide the game cover
      gameCover.style.display = "none";
      // Show the game board
      gameBoard.style.display = "block";
    });
  });