//Possible items in loot box
const lootItems = [
  {
    name: "Sword of Athens",
    color: "purple"
  },
  {
    name: "Bow of Eden",
    color: "red"
  },
  {
    name: "Steel Shield",
    color: "blue"
  },
  {
    name: "Wood Shield",
    color: "blue"
  },
  {
    name: "Fire Shield",
    color: "red"
  },
  {
    name: "Nord Axe",
    color: "blue"
  }
]

//Random number generator

//Gets random item
function getRandomItem () {
  let random = Math.floor(Math.random() * lootItems.length);
  const item = lootItems[random];
  return item;
}

//Prints item that was opened
function printWin (item) {
  winnings.innerHTML = "Winnings: " + item.name;
}

//Adds item to list of all items
function addItems (item) {
  const list = document.createElement("li");
  list.innerHTML = item.name + " : " + item.color;
  itemsList.appendChild(list);
}

function deleteItems () {
  let li = document.querySelector("li:last-child");
  itemsList.removeChild(li);
}

//Get id from HTML
const itemList = document.querySelector("#itemsList");
const winnings = document.querySelector(".win");
const myButtonAdd = document.querySelector("#lootBox");
const myButtonDelete = document.querySelector("#deleteItem");

//Button clicker that runs functions on click
myButtonAdd.addEventListener('click', () => {
  //Gets object from lootItems array
  const item = getRandomItem();

  //Prints winning item
  addItems(item);
  printWin(item);
});

//Button clicker that deletes the last item when pressed.
myButtonDelete.addEventListener('click', () => {
  deleteItems();
});
