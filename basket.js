let count = 0;
let countGuest = 0;
let countPara = document.getElementById("countZero")
let countParaGuest = document.getElementById("countZeroGuest")

// Home
function dunk1 () {
    count += 1;
    countPara.textContent = count;
}
function dunk2 () {
    count += 2;
    countPara.textContent = count;
}
function dunk3 () {
    count += 3;
    countPara.textContent = count;
}

// Guest 
function dunkGuest1 () {
    countGuest += 1;
    countParaGuest.textContent = countGuest;
}
function dunkGuest2 () {
    countGuest += 2;
    countParaGuest.textContent = countGuest;
}
function dunkGuest3 () {
    countGuest += 3;
    countParaGuest.textContent = countGuest;
}

// Reset 

function resetHome () {
    countPara.textContent = 0;
    count = 0;
}
function resetGuest() {
    countParaGuest.textContent = 0;
    countGuest = 0;
}