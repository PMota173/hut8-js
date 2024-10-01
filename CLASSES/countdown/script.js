import Countdown from "./countdown.js";

const tempoParaNatal = new Countdown("16 December 2024 23:59:59 GMT-0300");

const htmlDays = document.querySelector(".days");
const htmlHours = document.querySelector(".hours");
const htmlMinutes = document.querySelector(".minutes");
const htmlSeconds = document.querySelector(".seconds");

setInterval(() => {
    const { days, hours, minutes, seconds } = tempoParaNatal.total;
    htmlDays.textContent = days;
    htmlHours.textContent = hours;
    htmlMinutes.textContent = minutes;
    htmlSeconds.textContent = seconds;
}, 1000);
