function timer(){
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