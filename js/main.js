// Pop-up
//alert('Welcome to the world!');
//alert('You got the quest to need to go in the tent.');
//alert('But...');

// Change Title
document.getElementById("mainTitle").innerText = "Point and Click adventure";

// Game window refrence
const gameWindow = document.getElementById("gameWindow");
const state = { inCutscene: false, talkedWithStatueFirst: false, gotDuck: false, talkedWithStatueSecond: false };

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
const door2 = document.getElementById("door2");
const sign1 = document.getElementById("sign1");
const duck = document.getElementById("duck");
const tent = document.getElementById("tent");
const telescope = document.getElementById("telescope");
const houseInside1 = document.getElementById("insideHouse1");
const map1 = document.getElementById("map1");

//Inventory
const inventoryBox = document.getElementById("inventoryBox");
const inventoryList = document.getElementById("inventoryList");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var xPosition = e.clientX - rect.left;
    var yPosition = e.clientY - rect.top;
    if (e.target.id !== "mcImage" && e.target.id !== "gameWindow" && state.inCutscene === false) {
        mainCharacter.style.left = xPosition - offsetCharacter + "px";
        mainCharacter.style.top = yPosition - offsetCharacter + "px";

        switch (e.target.id) {
            case "door1":
                if (gameState.door1locked == true) {
                    if (document.getElementById("inv-key") !== null) {
                        gameState.door1locked = false;
                        changeInventory('key', 'delete');
                        setTimeout(function () { state.inCutscene = true; }, 0)
                        setTimeout(showMessage, 0, "mainCharacterSpeech", "The door is now unlocked jeej!");
                        setTimeout(function () { state.inCutscene = false; }, 3000)
                        revealEverything();
                        houseInside1.style.opacity = 0;
                        map1.style.opacity = 1;
                        door1.style.opacity = 0;
                    } else {
                        setTimeout(function () { state.inCutscene = true; }, 0)
                        setTimeout(showMessage, 0, "mainCharacterSpeech", "The door is locked.");
                        setTimeout(function () { state.inCutscene = false; }, 3000)
                        houseInside1.style.opacity = 0;
                        map1.style.opacity = 1;
                    }
                } else {
                    hideEverything();
                    houseInside1.style.opacity = 1;
                    map1.style.opacity = 0;
                    door2.style.opcacity = 1;
                    if (gameState.gotDuck == false) {
                        duck.style.opcacity = 1;
                    } else { duck.style.opcacity = 0; }
                    mainCharacter.style.left = "408px";
                    mainCharacter.style.top = "165px";
                }
            case "key1":
                revealEverything();
                key1.style.opacity = 0;
                if (document.getElementById("key1") !== null) {
                    setTimeout(function () { state.inCutscene = true; }, 0)
                    setTimeout(showMessage, 0, "mainCharacterSpeech", "Hey a brown key!");
                    setTimeout(function () { state.inCutscene = false; }, 3000)
                    document.getElementById("key1").remove();
                    changeInventory('key', 'add');
                }
                break;
            case "statue1":
                if (state.talkedWithStatueFirst === false) {
                    state.talkedWithStatueFirst = true;
                    setTimeout(function () { state.inCutscene = true; }, 0)
                    setTimeout(function () { state.talkedWithStatueSecond = true; }, 0)
                    statue1.style.opacity = 0;
                    setTimeout(function () { counterAvatarStatue.style.opacity = 1; }, 2000)
                    setTimeout(showMessage, 0, "mainCharacterSpeech", "Oh wow what a nice statue");
                    setTimeout(showMessage, 3000, "counterSpeechStatue", "Hello player");
                    setTimeout(showMessage, 6000, "counterSpeechStatue", "Is there something you want to ask?");
                    setTimeout(showMessage, 9000, "mainCharacterSpeech", "Wait you can talk!?");
                    setTimeout(showMessage, 12000, "counterSpeechStatue", "Yes my dear friend");
                    setTimeout(showMessage, 15000, "counterSpeechStatue", "So do you have a question for me?");
                    setTimeout(showMessage, 19000, "mainCharacterSpeech", "Yes do you know how I can get a duck?");
                    setTimeout(showMessage, 22000, "counterSpeechStatue", "Hmm...");
                    setTimeout(showMessage, 27000, "counterSpeechStatue", "I think you can find more info by the telescope.");
                    setTimeout(showMessage, 30000, "mainCharacterSpeech", "Thank you!");
                    setTimeout(showMessage, 33000, "counterSpeechStatue", "No problem.");
                    setTimeout(function () { counterAvatarStatue.style.opacity = 0; }, 36000)
                    setTimeout(function () { state.inCutscene = false; }, 36000)
                }
                else if (state.talkedWithStatueSecond === false) {
                    setTimeout(function () { state.inCutscene = true; }, 0)
                    setTimeout(function () { state.talkedWithStatueSecond = true; }, 0)
                    statue1.style.opacity = 0;
                    setTimeout(function () { counterAvatarStatue.style.opacity = 1; }, 2000)
                    setTimeout(showMessage, 0, "mainCharacterSpeech", "Hey I am back!");
                    setTimeout(showMessage, 3000, "counterSpeechStatue", "Hello player");
                    setTimeout(showMessage, 6000, "counterSpeechStatue", "Is there something you want to ask?");
                    setTimeout(showMessage, 9000, "mainCharacterSpeech", "Yes do you know how I can get in that building at the top left of here?");
                    setTimeout(showMessage, 12000, "counterSpeechStatue", "Hmm...");
                    setTimeout(showMessage, 15000, "counterSpeechStatue", "I think there was a person that hide a key by that tree trunk");
                    setTimeout(showMessage, 18000, "mainCharacterSpeech", "Thank you!");
                    setTimeout(showMessage, 21000, "counterSpeechStatue", "No problem");
                    setTimeout(function () { counterAvatarStatue.style.opacity = 0; }, 24000)
                    setTimeout(function () { state.inCutscene = false; }, 24000)
                } else {
                    setTimeout(function () { state.inCutscene = true; }, 0)
                    setTimeout(showMessage, 0, "mainCharacterSpeech", "I already talked with the statue");
                    setTimeout(function () { state.inCutscene = false; }, 3000)
                }
                break;
            case "door2":
                revealEverything();
                houseInside1.style.opacity = 0;
                map1.style.opacity = 1;
                door2.style.opcacity = 0;
                mainCharacter.style.left = "261px";
                mainCharacter.style.top = "439px";
                break;
            case "duck":
                duck.style.opcacity = 0;
                changeInventory('Duck', 'add');
                state.gotDuck = true;
                setTimeout(function () { state.inCutscene = true; }, 0)
                setTimeout(showMessage, 0, "mainCharacterSpeech", "Oh, a duck!");
                setTimeout(function () { state.inCutscene = false; }, 3000)
                break;
            case "telescope":
                if (state.talkedWithStatueFirst === true) {
                    setTimeout(function () { state.inCutscene = true; }, 0)
                    setTimeout(function () { counterAvatarMagnifyingGlass.style.opacity = 1; }, 2000)
                    setTimeout(showMessage, 0, "mainCharacterSpeech", "Alright lets look into this thing.");
                    setTimeout(showMessage, 3000, "counterSpeechMagnifyingGlass", "test");
                    setTimeout(function () { state.inCutscene = false; }, 6000)
                } else { }
                break;
            case "tent":
                if (state.gotDuck === true) {
                    setTimeout(function () { state.inCutscene = true; }, 0)
                    tent.style.opacity = 0;
                    counterAvatarTentGuard.style.opacity = 1;
                    setTimeout(showMessage, 0, "counterSpeechTentGuard", "Hello what do you want?");
                    setTimeout(showMessage, 3000, "mainCharacterSpeech", "I am here for the trial");
                    setTimeout(showMessage, 6000, "counterSpeechTentGuard", "Show the duck.");
                    setTimeout(showMessage, 9000, "mainCharacterSpeech", "Here you go.");
                    setTimeout(showMessage, 12000, "counterSpeechTentGuard", "Hm... alright welcome in!");
                    setTimeout(function () { counterAvatarTentGuard.style.opacity = 0; }, 15000)
                    setTimeout(function () { state.inCutscene = false; }, 15000)
                    setTimeout(function () { alert('You completed the game well done!'); }, 15000)
                } else {
                    setTimeout(function () { state.inCutscene = true; }, 0)
                    tent.style.opacity = 0;
                    counterAvatarTentGuard.style.opacity = 1;
                    setTimeout(showMessage, 0, "counterSpeechTentGuard", "Hello what do you want?");
                    setTimeout(showMessage, 3000, "mainCharacterSpeech", "I am here for the trial");
                    setTimeout(showMessage, 6000, "counterSpeechTentGuard", "Show the duck.");
                    setTimeout(showMessage, 9000, "mainCharacterSpeech", "I dont have one.");
                    setTimeout(showMessage, 12000, "counterSpeechTentGuard", "Then get one!");
                    setTimeout(function () { counterAvatarTentGuard.style.opacity = 0; }, 15000)
                    setTimeout(function () { state.inCutscene = false; }, 15000)
                }
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
    statue1.style.opacity = 1;
}

function hideEverything() {
    sign1.style.opacity = 0;
    door1.style.opacity = 0;
    statue1.style.opacity = 0;
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