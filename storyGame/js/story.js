// Player initialization
let player = {
    health: 20,
    sword: {
        name: "Iron Sword",
        minDamage: 4,
        maxDamage: 8
    },
    hasMagicSword: false
};

// Random number generator
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the game
function startGame() {
    alert(introText);
    let choice = prompt(pathText1);
    
    if (choice === "1") {
        enterDungeon();
    } else {
        alert("You leave the trading post. See you later!");
    }
}

// Function to handle the dungeon choices
function enterDungeon() {
    let area = prompt(pathText2);
    
    if (area === "1") {
        let hall = prompt(pathText3);
        
        if (hall === "1") {
            bossRoom(); // Function for the boss room
        } else if (hall === "2") {
            enemyRoom(); // Function for the enemy room
        } else {
            alert("Invalid choice. You stand there, unsure what to do.");
            enterDungeon(); // Restart the dungeon prompt
        }
    } else {
            if (player.health >= 20) {
                alert("You are already at full health.");
            } else {
                alert("You farm enemies in the open area and gain 5 health.");
                player.health += 5;
            }
        enterDungeon(); // Restart the dungeon prompt
    }
}

// Function for the boss room
function bossRoom() {
    alert(bossEntry);

    let bossHealth = 50;
    
    while (bossHealth > 0 && player.health > 0) {
        let action = prompt(attDodgeText);
        
        if (action === "1") {
            let playerDmg = random(player.sword.minDamage, player.sword.maxDamage);
            let bossDodged = Math.random() < 0.15; // 15% chance for the boss to dodge
            
            if (!bossDodged) {
                bossHealth -= playerDmg;
                alert(`You hit the boss for ${playerDmg} damage. Boss health is now ${bossHealth}.`);
            } else {
                alert("The boss dodged your attack!");
            }
            
        } else if (action === "2") {
            alert("You successfully dodged the boss's attack!");
            continue;
        }
        
        // Boss attacks with 30% chance to hit
        if (Math.random() < 0.3) {
            let bossDmg = random(5, 10);
            player.health -= bossDmg;
            alert(`The boss hits you for ${bossDmg} damage. Your health is now ${player.health}.`);
        }
    }

    if (bossHealth <= 0) {
        alert(bossWin);
        player.health = 20; // Reset player health
    }
    else {
        alert(bossDeath);
    }
}

// Function for the enemy room
function enemyRoom() {
    alert(geistEntry);
    
    let totalEnemyHealth = 30;
    
    while (totalEnemyHealth > 0 && player.health > 0) {
        let action = prompt(attDodgeText);
        
        if (action === "1") {
            let playerDmg = random(player.sword.minDamage, player.sword.maxDamage);
            totalEnemyHealth -= playerDmg;
            alert(`You hit the geist for ${playerDmg} damage. Remaining health: ${totalEnemyHealth}`);
        } else if (action === "2") {
            alert("You successfully dodged the geists attack!");
            continue;
        }
        
        // Enemies attack with 35% chance to hit
        if (Math.random() < 0.35) {
            let enemyDmg = random(2, 4);
            player.health -= enemyDmg;
            alert(`An enemy hits you for ${enemyDmg} damage. Your health is now ${player.health}.`);
        }
    }
    
    if (totalEnemyHealth <= 0) {
        alert(geistWin);
        player.sword = {
            name: "Magic Sword",
            minDamage: 13,
            maxDamage: 20
        };
        player.hasMagicSword = true;
        enterDungeon(); // Restart the dungeon prompt
    } else {
        alert(geistDeath);
        
    }
}

// Get the audio element and button
const audio = document.getElementById("backgroundAudio");
const audioButton = document.getElementById("audioButton");
let isPlaying = false; // Audio starts off by default

audio.volume = 0.35; // Default music volume

// Toggle audio on button click
audioButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        audioButton.textContent = "🔊 Turn On Music";
    } else {
        audio.play();
        audioButton.textContent = "🔇 Turn Off Music";
    }
    isPlaying = !isPlaying; // Toggle the music
});

// Start the game when the button is clicked
document.getElementById("startGame").addEventListener("click", startGame);

//https://tinyurl.com/dynamic-html-css-checkers
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);

document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
    
//set current year in span with id of this-year
let d = new Date(); let thisYear = d.getFullYear();
document.getElementById("this-year").innerHTML = thisYear;