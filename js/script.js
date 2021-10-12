       // invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

//Event Listener and function to add user input names to guestList
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    //Refactoring code to let a function do this & keep clode clean and streamlined - see three lines moved to addToList function
    //let listItem = document.createElement("li"); //use let because of block-scope
    //listItem.innerText = guest;
    //guestList.append(listItem);
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

//CREATE FUNCTIONS SEPARATELY - MAKES IT EASIER TO TEST WHAT IS WORKING/NOT, EASIER TO UNDERSTAND EVENT LISTENER AND UNDERSTAND WHAT IS GOION GON
//Function to clear input box
const clearInput = function () {
  guestInput.value = "";
};

//refactor the code to create a function just for adding a guest to the list
const addToList = function (guest) {
  const listItem = document.createElement("li"); //use const because of function scope
  listItem.innerText = guest;
  guestList.append(listItem);
};

//Limit Guest List to 8 people
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//Array of potluck items
const assignItems = function () {
  const potluckItems = [
    "cookies",
    "hummus",
    "chips",
    "salad",
    "beer",
    "peaches",
    "fruit tray",
    "veggie tray"
  ];
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length); //picks a random number between 0 and length of the potluck list array
    let randomPotluckItem = potluckItems.splice(randomPotluckIndex, 1); //grabs the potluck item at the random number, then deletes that number so it isn't selected again
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}`; //assigns the random item to the guest in order of the for of loop iteration
    assignedItems.append(listItem);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
