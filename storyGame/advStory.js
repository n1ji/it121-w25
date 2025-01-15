// Player stats
let player = {
    health: 20,
    sword: {
        name: "Basic Sword",
        minDamage: 4,
        maxDamage: 8
    },
    hasMagicSword: false,
    inventory: []
};

// Random number generator between min and max (inclusive)
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the game
function startGame() {
    alert("You arrive at the trading post with a basic sword and 20 health.");
    let choice = prompt("What do you want to do? \n1. Enter the dungeon\n2. Leave the trading post");
    
    if (choice === "1") {
        enterDungeon();
    } else {
        alert("You leave the trading post. Maybe next time!");
    }
}

// Function to handle the dungeon choices
function enterDungeon() {
    let area = prompt("Do you want to: \n1. Enter the catacombs\n2. Farm enemies in an open area");
    
    if (area === "1") {
        let hall = prompt("You enter the main catacomb chamber. Do you go: \n1. Left hall (Boss Room)\n2. Right hall (Enemy Room)");
        
        if (hall === "1") {
            bossRoom();
        } else if (hall === "2") {
            enemyRoom();
        } else {
            alert("Invalid choice. You stand there, unsure what to do.");
        }
    } else {
        alert("You farm enemies in the open area and gain some experience.");
        enterDungeon(); // Restart the dungeon prompt
    }
}

// Function for the boss room
function bossRoom() {
    alert("You enter the left hall and find a giant boss with 50 health!");

    let bossHealth = 50;
    
    while (bossHealth > 0 && player.health > 0) {
        let action = prompt("Do you want to: \n1. Attack\n2. Dodge");
        
        if (action === "1") {
            let damage = random(player.sword.minDamage, player.sword.maxDamage);
            let bossDodged = Math.random() < 0.07; // 7% chance to dodge
            
            if (!bossDodged) {
                bossHealth -= damage;
                alert(`You hit the boss for ${damage} damage. Boss health is now ${bossHealth}.`);
            } else {
                alert("The boss dodged your attack!");
            }
            
        } else if (action === "2") {
            alert("You successfully dodged the boss's attack!");
            continue;
        }
        
        // Boss attacks with 20% chance to hit
        if (Math.random() < 0.2) {
            player.health -= 5;
            alert(`The boss hits you for 5 damage. Your health is now ${player.health}.`);
        }
    }

    if (player.health <= 0) {
        alert("You have been defeated by the boss. Game over.");
    } else {
        alert("You defeated the boss! You found a magic rainbow-sprinkled donut.");
        player.inventory.push("Magic Rainbow-Sprinkled Donut");
    }
}

// Function for the enemy room
function enemyRoom() {
    alert("You enter the right hall and find three enemies, each with 10 health.");
    
    let totalEnemyHealth = 30;
    
    while (totalEnemyHealth > 0 && player.health > 0) {
        let action = prompt("Do you want to: \n1. Attack\n2. Dodge");
        
        if (action === "1") {
            let damage = random(player.sword.minDamage, player.sword.maxDamage);
            totalEnemyHealth -= damage;
            alert(`You hit the enemy for ${damage} damage. Remaining enemy health: ${totalEnemyHealth}`);
        } else if (action === "2") {
            alert("You successfully dodged the enemy's attack!");
            continue;
        }
        
        // Enemies attack with 30% chance to hit
        if (Math.random() < 0.3) {
            player.health -= 2;
            alert(`An enemy hits you for 2 damage. Your health is now ${player.health}.`);
        }
    }
    
    if (player.health <= 0) {
        alert("You have been defeated by the enemies. Game over.");
    } else {
        alert("You defeated all the enemies and found a Magic Sword!");
        player.sword = {
            name: "Magic Sword",
            minDamage: 13,
            maxDamage: 20
        };
        player.hasMagicSword = true;
        enterDungeon(); // Restart the dungeon prompt
    }
}

// Start the game when the button is clicked
document.getElementById("startGame").addEventListener("click", startGame);
