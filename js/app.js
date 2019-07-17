function timer(){
    // Modified from reference at stackoverflow https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
    var sec = 0;
    var timer = setInterval(function(){
        document.getElementById('time').innerHTML='Seconds: ' + sec;
        sec++;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}


timer();