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


timer();
