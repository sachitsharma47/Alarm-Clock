// Variables and Constants
let showNavBar = document.getElementById('showNavBar');
let hideNavBar = document.getElementById('hideNavBar');
let sideBarSection = document.getElementById('sideBarSection');
let currentTime = document.getElementById('currentTime');
let setAlarmbtn = document.getElementById('setAlarmbtn');
let stopAlarmBtn = document.getElementById('stopAlarmBtn');

let finalInput; // Final User Input 
let cTime; // Full Current time and date
let time; // Acctual Current Time

let alarmSoundOptions; // Alarm Sound User Selects


// Functions
function showNavBarFun() {
    sideBarSection.style.width = "20vw";
}

function hideNavBarFun() {
    sideBarSection.style.width = "0";
}

function getUserInput() {
    let userHour = document.getElementById('userHour').value;
    let userMinutes = document.getElementById('userMinutes').value;
    let userSeconds = document.getElementById('userSeconds').value;

    finalInput = userHour + ":" + userMinutes + ":" + userSeconds;
}

function displayTime() {
    cTime = new Date();
    time = cTime.toLocaleTimeString();

    currentTime.innerHTML = time;

    setTimeout(() => {
        displayTime();
    }, 1000);
}

function alarmSoundFun() {
    alarmSoundOptions = document.querySelector('input[name="alarmSounds"]:checked').value;

    let alarmSound = new Audio(`../Ringtones/${alarmSoundOptions}.wav`);
    alarmSound.play();

    setTimeout(() => {
        alarmSound.pause();
        alarmSoundFun();
    }, 2000);

}

function main() {
    getUserInput();

    if (finalInput == time) {
        alarmSoundFun();
    }
    else {
        setTimeout(() => {
            main();
        }, 2000);
    }
}

// Main Logic
displayTime();

showNavBar.addEventListener('click', showNavBarFun);
hideNavBar.addEventListener('click', hideNavBarFun);

setAlarmbtn.addEventListener('click', main);

setAlarmbtn.addEventListener('click', () => {
    stopAlarmBtn.classList.remove('stopAlarmBtnHide');
    stopAlarmBtn.classList.add('stopAlarmBtnShow');
    setAlarmbtn.classList.add('setAlarmBtnHide');
});

stopAlarmBtn.addEventListener('click', () => {
    window.location.reload(true);
});