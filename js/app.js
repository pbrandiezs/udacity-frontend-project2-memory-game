
var cardValues=["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];
var faceUp=[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const cards = document.querySelectorAll('.cards');
var guess = [];  //array to hold guesses
var guessTarget = []; //array to hold original positions when guessing
var guessTargetCard = []; //array to hold original card position
var guessCount = 0;  //guess pair count
var moves = 0;  //moves counter
var matches = 0; //matches counter 16 completes the game
var noMatch = false; //set to true if no match from card turns

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function timer(){
    // Modified from reference at stackoverflow https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
    /**
    * Main timer function controls game status
    */
    var sec = 0;
    var timer = setInterval(function(){
        document.getElementById('time').innerHTML='Seconds: ' + sec;
        sec++;
        if (moves > 10 && moves < 20)  {
            document.getElementById('stars').innerHTML =
            '<p>\
            <span class="fa fa-star checked"></span>\
            <span class="fa fa-star checked"></span>\
            <span class="fa fa-star"></span>\
            </p>';
        }
        if (moves >= 20 && moves <30)  {
            document.getElementById('stars').innerHTML =
            '<p>\
            <span class="fa fa-star checked"></span>\
            <span class="fa fa-star"></span>\
            <span class="fa fa-star"></span>\
            </p>';
        }
        if (moves >= 30)  {
            document.getElementById('stars').innerHTML =
            '<p>\
            <span class="fa fa-star"></span>\
            <span class="fa fa-star"></span>\
            <span class="fa fa-star"></span>\
            </p>';
        }
        if (sec >= 300) {
            clearInterval(timer);
            document.getElementById('time').innerHTML='Game Over!';
        }
        if (matches === 16) {
            clearInterval(timer);
            document.getElementById('time').innerHTML='Winner!';
            document.getElementById('modal-text').textContent = 'Winner!! Seconds: ' + sec + ' Moves: ' + moves;
            modal.classList.toggle("show-modal");
        }
        document.getElementById('moves').innerHTML='Moves ' + moves;
    }, 1000);
}

function shuffle(a) {
    // Fisher-Yates shuffle algorithm from stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    /**
     * Shuffles array in place.
     * @param {Array} a items An array containing the items.
     */
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

var clickCardFunction = function (event) {
    /**
    * Acts when a card is clicked.
    * @param event click event.
    */
    card = event.target.textContent;
    // Turn cards back over if previous no match.
    if (noMatch === true) {
        //return guesses to facedown
        guessTarget[0].textContent = guessTargetCard[0];
        guessTarget[0].style.color = "#d15555";
        guessTarget[1].textContent = guessTargetCard[1];
        guessTarget[1].style.color = "#d15555";
        faceUp[guessTargetCard[0] - 1] = false;
        faceUp[guessTargetCard[1] - 1] = false;
        noMatch = false;
    }
    // Check if card is face up.
    if (faceUp[card - 1] === false) {
        faceUp[card - 1] = true;
    } else {
        // console.log("Card already faceup, not allowed!");
        return;
    }
    moves++;
    // Check if match.
    if (guessCount === 0) {
        guess[0] = cardValues[card - 1];
        guessTarget[0] = event.target; //store original
        guessTargetCard[0] = card;  //store original card position
        event.target.textContent = cardValues[card - 1];
        event.target.style.color = "green";
        guessCount++;
    } else {
        guess[1] = cardValues[card - 1];
        guessTarget[1] = event.target;  //store original
        guessTargetCard[1] = card;  //store original card position
        event.target.textContent = cardValues[card - 1];
        event.target.style.color = "green";
        guessCount = 0;
        if (guess[0] === guess[1]) {
            // Match!
            matches += 2;
            guessTarget[0].style.color = "#1976c7";
            guessTarget[1].style.color = "#1976c7";
            if (matches === 16) {  //check if game winner
                for (i=0;i<=15;i++) {
                    cards[i].removeEventListener('click', clickCardFunction, false);
                }
            }
        } else {
            //No Match!
            noMatch = true;
        }
    }
};

function toggleModal() {
    /**
    * Toggle modal display.
    */
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    /**
    * Toggle modal.
    * @param event click event
    */
    if (event.target === modal) {
        toggleModal();
    }
}

// Add event listener to each card
for (i=0;i<=15;i++) {
    cards[i].addEventListener('click', clickCardFunction, false);
}

// Call timer loop manages game status
timer();

// Assign card values
shuffle(cardValues);

// Uncomment for testing - display card values
// console.log(cardValues);

// manage modal popup
// trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
