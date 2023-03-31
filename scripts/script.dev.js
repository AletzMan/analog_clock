"use strict";

var canvas = document.querySelector(".canvas");
var ctxClock = canvas.getContext("2d");
var handHour = document.querySelector(".hands__hour");
var handMinute = document.querySelector(".hands__minute");
var handSecond = document.querySelector(".hands__second");
var weekDay = document.querySelector(".date__weekday");
var day = document.querySelector(".date__day");
var month = document.querySelector(".date__month");
var year = document.querySelector(".date__year");
var numberOfLines = 60;
var positionAngle = 2 * Math.PI / (numberOfLines * 2);
var circleDiameter = 0;
DrawLinesClock();

function DrawLinesClock() {
  for (var index = 0; index < numberOfLines; index++) {
    ctxClock.strokeStyle = index % 5 == 0 ? "#2c2c2c" : "#656565";
    ctxClock.lineWidth = index % 5 == 0 ? 40 : 20;
    circleDiameter = index % 5 == 0 ? 242 : 250;
    ctxClock.beginPath();
    ctxClock.arc(275, 275, circleDiameter, positionAngle * (index * 2) - 0.008, positionAngle * (index * 2 + 0.1));
    ctxClock.stroke();
  }
}

setInterval(function () {
  var date = new Date();
  var seconds = 360 / 120 * (date.getSeconds() * 2);
  var minutes = 360 / 60 * date.getMinutes();
  var hours = 360 / 12 * date.getHours();
  handSecond.style.transform = "rotate(".concat(seconds, "deg)");
  handMinute.style.transform = "rotate(".concat(minutes, "deg)");
  handHour.style.transform = "rotate(".concat(hours, "deg)");
  GetDate();
}, 1000);

function GetDate() {
  var date = new Date();
  var weekdate = date.getDay();
  var daysName = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  var daysMonth = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  weekDay.textContent = daysName[weekdate];
  day.textContent = date.getDate();
  month.textContent = daysMonth[date.getMonth()];
  year.textContent = date.getFullYear();
}