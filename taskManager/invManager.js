let inventory = ["Focal Radiance", "HD800", "HD600"];
const outputDiv = document.getElementById('output');

// Initial display of items
if (inventory.length === 0) {
    outputDiv.innerHTML = "No items in inventory.";
} else {
    let itemsList = "<h2>Inventory Items:</h2><ol>";
    for (let i = 0; i < inventory.length; i++) {
        itemsList += `<li>${inventory[i]}</li>`;
    }
    itemsList += "</ol>";
    outputDiv.innerHTML = itemsList;
}

document.getElementById('openMenu').addEventListener('click', () => {
    let running = true;
    while (running) {
        let choice = prompt(`Inventory Manager\n1. View all items\n2. Add a new item\n3. Remove an item\n4. Exit\nChoose an option:`);

        if (choice === "1") {
            // View all items
            if (inventory.length === 0) {
                outputDiv.innerHTML = "No items in inventory.";
            } else {
                let itemsList = "<h2>Inventory Items:</h2><ol>";
                for (let i = 0; i < inventory.length; i++) {
                    itemsList += `<li>${inventory[i]}</li>`;
                }
                itemsList += "</ol>";
                outputDiv.innerHTML = itemsList;
                alert("Inventory Items:\n" + inventory.join("\n"));
            }
        } else if (choice === "2") {
            // Add a new item
            let newItem = prompt("Enter the name of the new item:");
            if (newItem) {
                inventory.push(newItem);
                alert(`Added "${newItem}" to inventory.`);
                if (inventory.length === 0) {
                    outputDiv.innerHTML = "No items in inventory.";
                } else {
                    let itemsList = "<h2>Inventory Items:</h2><ol>";
                    for (let i = 0; i < inventory.length; i++) {
                        itemsList += `<li>${inventory[i]}</li>`;
                    }
                    itemsList += "</ol>";
                    outputDiv.innerHTML = itemsList;
                }
            } else {
                alert("Invalid input. Item not added.");
            }
        } else if (choice === "3") {
            // Remove an item
            if (inventory.length === 0) {
                alert("No items to remove.");
            } else {
                let itemNumber = prompt("Enter the number of the item to remove:");
                let index = parseInt(itemNumber) - 1;
                if (index >= 0 && index < inventory.length) {
                    let removedItem = inventory.splice(index, 1);
                    alert(`Removed "${removedItem}" from inventory.`);
                    if (inventory.length === 0) {
                        outputDiv.innerHTML = "No items in inventory.";
                    } else {
                        let itemsList = "<h2>Inventory Items:</h2><ol>";
                        for (let i = 0; i < inventory.length; i++) {
                            itemsList += `<li>${inventory[i]}</li>`;
                        }
                        itemsList += "</ol>";
                        outputDiv.innerHTML = itemsList;
                    }
                } else {
                    alert("Invalid item number.");
                }
            }
        } else if (choice === "4") {
            // Exit the program
            running = false;
            alert("Exiting the program.");
        } else {
            // Invalid option
            alert("Invalid option. Please try again.");
        }
    }
});