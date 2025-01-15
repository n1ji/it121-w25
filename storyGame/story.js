// Wait for the button to be clicked before starting the game
document.getElementById('startGame').addEventListener('click', function() {
    // Ask the player for their name and greet them
    playerName = prompt("What is your name?");
    alert("Hello " + playerName + "! " + introText);

    // First decision point: the fork in the road
    let firstChoice = prompt(pathText1).toLowerCase();

    if (firstChoice === 'left') {
        // Player chose the mountain path
        let secondChoice = prompt(pathText2).toLowerCase();

        if (secondChoice === 'enter') {
            // Player chose to enter the cave
            alert(endText3);
        } else if (secondChoice === 'continue') {
            // Player chose to continue down the path
            alert(endText2);
        } else {
            // Invalid input handling
            alert("Invalid input. Try again.");
        }
    } else if (firstChoice === 'right') {
        // Player chose the forest path
        let secondChoice = prompt(pathText2).toLowerCase();

        if (secondChoice === 'enter') {
            // Player chose to enter the cave
            alert(endText3);
        } else if (secondChoice === 'continue') {
            // Player chose to continue down the path
            alert(endText2);
        } else {
            // Invalid input handling
            alert("Invalid input. Try again.");
        }
    } else {
        // Invalid input handling for the first choice
        alert("Invalid choice! Please choose 'left' or 'right'.");
    }
});

// Get the audio element and button
const audio = document.getElementById("backgroundAudio");
const audioButton = document.getElementById("audioButton");
let isPlaying = false; // Audio starts off

audio.volume = 0.3;
// Toggle audio on button click
audioButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        audioButton.textContent = "🔊 Turn On Music";
    } else {
        audio.play();
        audioButton.textContent = "🔇 Turn Off Music";
    }
    isPlaying = !isPlaying; // Toggle the state
});