// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
const playButton = document.getElementById('play-button');

// Add click event listener to the play button
playButton.addEventListener('click', () => {
    // Change the body class to display the game
    document.body.className = 'game-display';
    
    // Call a function to start the game
    startGame();
});

// Function to start the game
function startGame() {
    // Here you can write the code to generate random numbers, display them, and set up the game logic
    // For example:
    // Generate random numbers
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;

    // Display the random numbers
    document.getElementById('number1').innerText = number1;
    document.getElementById('number2').innerText = number2;

    // You can continue with the game logic here
}