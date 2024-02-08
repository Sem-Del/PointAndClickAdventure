//alert('You are going to die');
document.getElementById("mainTitle").innerText = "Point and Click adventure";

// Game window refrence
const gameWindow = document.getElementById("gameWindow");

// Main Character
const mainCharacter = document.getElementById("mainCharacterId");

// Items
const door1 = document.getElementById("door1");
const sign1 = document.getElementById("sign1");

// const offsetCharacter = 16;

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var xPosition = e.clientX - rect.left;
    var yPosition = e.clientY - rect.top;
    console.log("You clicked on " + e.target.id);
    mainCharacter.style.left = xPosition + "px";
    mainCharacter.style.top = yPosition + "px";

    switch (e.target.id) {
        case "door1":
            mainCharacter.style.backgroundColor = "#ffffff"
            e.target.style.opacity = 0.4;
            break;
        case "sign1":
            e.target.style.opacity = 0.4;
            break;
        default:
            mainCharacter.style.backgroundColor = "rgb(255, 0, 0)"
            door1.style.opacity = 1;
            sign1.style.opactiy = 1;
            break;
    }

}