function timer(){
    // Modified from reference at stackoverflow https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
    var sec = 0;
    var timer = setInterval(function(){
        document.getElementById('time').innerHTML='Seconds: ' + sec;
        sec++;
        if (sec > 10 && sec < 15)  {
            document.getElementById('stars').innerHTML =
            '<p>\
            <span class="fa fa-star checked"></span>\
            <span class="fa fa-star checked"></span>\
            <span class="fa fa-star"></span>\
            </p>';
        } 
        if (sec >= 15 && sec <20)  {
            document.getElementById('stars').innerHTML =
            '<p>\
            <span class="fa fa-star checked"></span>\
            <span class="fa fa-star"></span>\
            <span class="fa fa-star"></span>\
            </p>';
        } 
        if (sec >= 20 && sec <300)  {
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
var faceUp=[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const cards = document.querySelectorAll('.cards');
var guess = [];
var guessCount = 0;

var clickCardFunction = function (event) {
    console.log('Clicked!');
    card = event.target.textContent;
    console.log(card);
    console.log(cardValues[card - 1]);
    if (faceUp[card - 1] === false) {
        faceUp[card - 1] = true;
    } else {
        console.log("Card already faceup, not allowed!");
        return;
    }
    if (guessCount === 0) {
        guess[0] = cardValues[card - 1];
        guessCount++;
    } else {
        guess[1] = cardValues[card - 1];
        guessCount = 0;
        if (guess[0] === guess[1]) {
            console.log("Match!");
        } else {
            console.log("No Match!");
        }
    }

};

for (i=0;i<=15;i++) {
    cards[i].addEventListener('click', clickCardFunction, false);
}



timer();
shuffle(cardValues);
console.log(cardValues);