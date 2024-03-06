// Iteration 2: Generate 2 random number and display it on the screen

// Function to generate random numbers and display them
function generateNumbers() {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;
    document.getElementById('number1').innerText = number1;
    document.getElementById('number2').innerText = number2;
}

// Call the function to generate numbers when the page loads
window.onload = generateNumbers;

// Iteration 3: Make the options button functional

document.getElementById('greater-than').addEventListener('click', function() {
    checkRelation('greater');
});
document.getElementById('equal-to').addEventListener('click', function() {
    checkRelation('equal');
});
document.getElementById('lesser-than').addEventListener('click', function() {
    checkRelation('lesser');
});

// Function to check the chosen option
function checkRelation(option) {
    const number1 = parseInt(document.getElementById('number1').innerText);
    const number2 = parseInt(document.getElementById('number2').innerText);

    switch(option) {
        case 'greater':
            if (number1 > number2) {
                alert('Correct!');
            } else {
                alert('Incorrect!');
            }
            break;
        case 'equal':
            if (number1 === number2) {
                alert('Correct!');
            } else {
                alert('Incorrect!');
            }
            break;
        case 'lesser':
            if (number1 < number2) {
                alert('Correct!');
            } else {
                alert('Incorrect!');
            }
            break;
    }

    // Generate new numbers after checking the relation
    generateNumbers();
}

// Iteration 4: Build a timer for the game

// Timer for the game
var timeLeft = 60; // 60 seconds
const timerElement = document.getElementById('timer');
timerElement.style.fontSize = '14px';
var timer = setInterval(function() {
    document.getElementById('timer').innerText = 'Time Left: ' + timeLeft + ' seconds';
    timeLeft--;
    if (timeLeft < 0) {
        clearInterval(timer);
        alert('Time\'s up!');
    }
}, 1000);
