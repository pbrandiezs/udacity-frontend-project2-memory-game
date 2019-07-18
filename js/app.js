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

timer();
shuffle(cardValues);
console.log(cardValues);