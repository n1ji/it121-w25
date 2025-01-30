let inventory = [];

function displayMenu() {
    return prompt(`Inventory Manager
1. View all items
2. Add a new item
3. Remove an item
4. Exit
Choose an option:`);
}

function viewItems() {
    if (inventory.length === 0) {
        alert("No items in inventory.");
    } else {
        let itemsList = "Inventory Items:\n";
        for (let i = 0; i < inventory.length; i++) {
            itemsList += `${i + 1}. ${inventory[i]}\n`;
        }
        alert(itemsList);
    }
}

function addItem() {
    let newItem = prompt("Enter the name of the new item:");
    if (newItem) {
        inventory.push(newItem);
        alert(`Added "${newItem}" to inventory.`);
    } else {
        alert("Invalid input. Item not added.");
    }
}

function removeItem() {
    if (inventory.length === 0) {
        alert("No items to remove.");
        return;
    }

    let itemNumber = prompt("Enter the number of the item to remove:");
    let index = parseInt(itemNumber) - 1;

    if (index >= 0 && index < inventory.length) {
        let removedItem = inventory.splice(index, 1);
        alert(`Removed "${removedItem}" from inventory.`);
    } else {
        alert("Invalid item number.");
    }
}

function main() {
    let running = true;
    while (running) {
        let choice = displayMenu();
        switch (choice) {
            case "1":
                viewItems();
                break;
            case "2":
                addItem();
                break;
            case "3":
                removeItem();
                break;
            case "4":
                running = false;
                alert("Exiting the program.");
                break;
            default:
                alert("Invalid option. Please try again.");
        }
    }
}

main();