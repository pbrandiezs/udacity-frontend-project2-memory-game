function timer(){
    // Modified from reference at stackoverflow https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
    var sec = 0;
    var timer = setInterval(function(){
        document.getElementById('time').innerHTML='Seconds: ' + sec;
        sec++;
        if (sec > 100 && sec < 150)  {
            document.getElementById('stars').innerHTML =
            '<p>\
            <span class="fa fa-star checked"></span>\
            <span class="fa fa-star checked"></span>\
            <span class="fa fa-star"></span>\
            </p>';
        } 
        if (sec >= 150 && sec <200)  {
            document.getElementById('stars').innerHTML =
            '<p>\
            <span class="fa fa-star checked"></span>\
            <span class="fa fa-star"></span>\
            <span class="fa fa-star"></span>\
            </p>';
        } 
        if (sec >= 200 && sec <300)  {
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
        }
        document.getElementById('moves').innerHTML='Moves ' + moves;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
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



var cardValues=["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];
var faceUp=[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const cards = document.querySelectorAll('.cards');
var guess = [];  //array to hold guesses
var guessTarget = []; //array to hold original positions when guessing
var guessTargetCard = []; //array to hold original card position
var guessCount = 0;  //guess pair count
var moves = 0;  //moves counter
var matches = 0; //matches counter 16 completes the game

var clickCardFunction = function (event) {
    console.log('Clicked!');
    card = event.target.textContent;
    console.log(card);
    console.log(cardValues[card - 1]);
    // Check if card is face up.
    if (faceUp[card - 1] === false) {
        faceUp[card - 1] = true;
    } else {
        console.log("Card already faceup, not allowed!");
        return;
    }
    moves++;
    // Check if match.
    if (guessCount === 0) {
        guess[0] = cardValues[card - 1];
        guessTarget[0] = event.target; //store original
        guessTargetCard[0] = card;  //store original card position
        event.target.textContent = cardValues[card - 1];
        guessCount++;
    } else {
        guess[1] = cardValues[card - 1];
        guessTarget[1] = event.target;  //store original
        guessTargetCard[1] = card;  //store original card position
        event.target.textContent = cardValues[card - 1];
        guessCount = 0;
        if (guess[0] === guess[1]) {
            console.log("Match!");
            matches += 2;
            console.log("Matches " + matches);
            matches = 16; //for testing
            if (matches === 16) {  //check if game winner
                console.log("Winner!");
                for (i=0;i<=15;i++) {
                    cards[i].removeEventListener('click', clickCardFunction, false);
                }
            }
        } else {
            console.log("No Match!");
            //return guesses to facedown
            guessTarget[0].textContent = guessTargetCard[0];
            guessTarget[1].textContent = guessTargetCard[1];
            faceUp[guessTargetCard[0] - 1] = false;
            faceUp[guessTargetCard[1] - 1] = false;
            console.log('guessTarget ' + guessTarget);
            console.log('faceUp ' + faceUp);
        }
    }

};

for (i=0;i<=15;i++) {
    cards[i].addEventListener('click', clickCardFunction, false);
}



timer();
shuffle(cardValues);
console.log(cardValues);