var dateCountDown = new Date(Date.parse("2024/05/11 08:00:00"));
var dayID = document.getElementById("day");
var hoursID = document.getElementById("hours");
var minuteID = document.getElementById("minute");
var secondID = document.getElementById("second");
function coutDownDate(){
    var now = new Date().getTime();
    var distance = dateCountDown - now;
    if(distance < 0){
        clearInterval(countdownInterval);
        return;
    }
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    dayID.innerHTML = days;
    hoursID.innerHTML = hours;
    minuteID.innerHTML = minutes;
    secondID.innerHTML = seconds;
}
var countdownInterval = setInterval(coutDownDate, 1000);
