// Pop-up
//alert('You started the game have fun!');

// Change Title
document.getElementById("mainTitle").innerText = "Point and Click adventure";

// Game window refrence
const gameWindow = document.getElementById("gameWindow");
const state = { inCutscene: false };

//Game state
gameState = {
    "door1locked": true,
    "inventory": [
    ]
}

// Main Character
const mainCharacter = document.getElementById("mainCharacterId");
const offsetCharacter = 32;

// Items
const door1 = document.getElementById("door1");
const sign1 = document.getElementById("sign1");

//Inventory
const inventoryBox = document.getElementById("inventoryBox");
const inventoryList = document.getElementById("inventoryList");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var xPosition = e.clientX - rect.left;
    var yPosition = e.clientY - rect.top;
    if (e.target.id !== "mcImage" && state.inCutscene === false) {
        mainCharacter.style.left = xPosition - offsetCharacter + "px";
        mainCharacter.style.top = yPosition - offsetCharacter + "px";

        switch (e.target.id) {
            case "door1":
                if (gameState.door1locked == true) {
                    if (document.getElementById("inv-key") !== null) {
                        gameState.door1locked = false;
                        changeInventory('key', 'delete');
                        console.log('Door unlocked!');
                        revealEverything();
                        door1.style.opacity = 0;
                    } else {
                        alert("Door is locked!");
                    }
                } else {
                    console.log('enter building');
                    revealEverything();
                    door1.style.opacity = 0;
                }
            case "sign1":
                revealEverything();
                e.target.style.opacity = 1;
                break;
            case "key1":
                revealEverything();
                key1.style.opacity = 0;
                if (document.getElementById("key1") !== null) {
                    alert('You found a brown key!')
                    document.getElementById("key1").remove();
                    changeInventory('key', 'add');
                }
                break;
            case "statue1":
                setTimeout(function () { state.inCutscene = true; }, 0)
                statue1.style.opacity = 0;
                setTimeout(function () { counterAvatar.style.opacity = 1; }, 2000)
                setTimeout(showMessage, 0, "mainCharacterSpeech", "Oh wow what a nice statue");
                setTimeout(showMessage, 3000, "counterSpeech", "Hello player");
                setTimeout(showMessage, 6000, "counterSpeech", "Is there something you want to ask?");
                setTimeout(showMessage, 9000, "mainCharacterSpeech", "Wait you can talk!?");
                setTimeout(showMessage, 12000, "counterSpeech", "Yes my dear friend");
                setTimeout(showMessage, 15000, "counterSpeech", "So do you have a question for me?");
                setTimeout(showMessage, 19000, "mainCharacterSpeech", "Yes do you know how I can go into that house over there?");
                setTimeout(showMessage, 22000, "counterSpeech", "Hmm...");
                setTimeout(showMessage, 27000, "counterSpeech", "I think there was a person that hide a key by that old well");
                setTimeout(showMessage, 30000, "mainCharacterSpeech", "Thank you!");
                setTimeout(showMessage, 33000, "counterSpeech", "No problem");
                setTimeout(function () { counterAvatar.style.opacity = 0; }, 36000)
                setTimeout(function () { state.inCutscene = false; }, 36000)
                break;
            default:
                revealEverything();
                break;
        }
    }
    /**
 * function to change inventory
 * @param {string} itemName 
 * @param {string} action "add", "delete"
 * @returns 
 */
    function changeInventory(itemName, action) {
        if (itemName == null || action == null) {
            console.log('wrong parameters given to changeInventory()');
            return
        }

        switch (action) {
            case 'add':
                gameState.inventory.push(itemName);
                break
            case 'delete':
                gameState.inventory.find(function (item, index) {
                    if (item == itemName) {
                        var index = gameState.inventory.indexOf(item);
                        if (index !== -1) {
                            gameState.inventory.splice(index, 1);
                        }
                    }
                })
                break

            default:
                break;
        }
        updateInventory(gameState.inventory, inventoryList);
    }

    /**
     * update inventoryList
     * @param {Array} inventory array of items 
     * @param {HTMLElement} inventoryList html <ul> element 
     */
    function updateInventory(inventory, inventoryList) {
        inventoryList.innerHTML = '';
        inventory.forEach(function (item) {
            const inventoryItem = document.createElement("li");
            inventoryItem.id = "inv-" + item;
            inventoryItem.innerText = item;
            inventoryList.appendChild(inventoryItem);
        })
    }

}

function revealEverything() {
    sign1.style.opacity = 1;
    door1.style.opacity = 1;
}

/**
 * Show a message in a speech bubble
 * @param {string} targetBalloon Person that needs to talk
 * @param {string} message Message
 */

function showMessage(targetBalloon, message) {
    document.getElementById(targetBalloon).style.opacity = "1";
    document.getElementById(targetBalloon).innerText = message;
    setTimeout(hideMessage, 2900, targetBalloon)
}

function hideMessage(targetBalloon) {
    document.getElementById(targetBalloon).style.opacity = "0";
}