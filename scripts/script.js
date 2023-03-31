const canvas = document.querySelector(".canvas");
const ctxClock = canvas.getContext("2d");
const handHour = document.querySelector(".hands__hour");
const handMinute = document.querySelector(".hands__minute");
const handSecond = document.querySelector(".hands__second");
const weekDay = document.querySelector(".date__weekday");
const day = document.querySelector(".date__day");
const month = document.querySelector(".date__month");
const year = document.querySelector(".date__year");


const numberOfLines = 60;
const positionAngle = ((2 * Math.PI) / (numberOfLines * 2));
let circleDiameter = 0;

DrawLinesClock();

function DrawLinesClock() {
    for (let index = 0; index < numberOfLines; index++) {
        ctxClock.strokeStyle = index % 5 == 0 ? "#2c2c2c" : "#656565";
        ctxClock.lineWidth = index % 5 == 0 ? 40 : 20;
        circleDiameter = index % 5 == 0 ? 242 : 250;
        ctxClock.beginPath();
        ctxClock.arc(275, 275, circleDiameter, positionAngle * (index * 2) - 0.008, positionAngle * ((index * 2) + 0.1));
        ctxClock.stroke();
    }
}

setInterval(() => {
    const date = new Date();
    let seconds = (360 / 120) * (date.getSeconds() * 2);
    let minutes = (360 / 60) * date.getMinutes();
    let hours = (360 / 12) * date.getHours();
    handSecond.style.transform = `rotate(${seconds}deg)`;
    handMinute.style.transform = `rotate(${minutes}deg)`;
    handHour.style.transform = `rotate(${hours}deg)`;
    GetDate();
}, 1000);

function GetDate() {
    const date = new Date();
    let weekdate = date.getDay();
    let daysName = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let daysMonth = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    weekDay.textContent = daysName[weekdate];
    day.textContent = date.getDate();
    month.textContent  = daysMonth[date.getMonth()];
    year.textContent = date.getFullYear();


}