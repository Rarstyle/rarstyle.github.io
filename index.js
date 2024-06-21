
let sum = 0;
let messageElement = document.getElementById("message-el");
let cardsElement = document.getElementById("cards-el");
let sumElement = document.getElementById("sum-el");



function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

let listOfCards=[getRandomNumber(), getRandomNumber()];
console.log(listOfCards);



function startButton() {
    messageElement.textContent = "Do you want a new card?";
    let newCard = getRandomNumber();
    sum += newCard;
    sumElement.textContent = "Sum: " + sum;
    cardsElement.textContent += newCard + " ";
}






