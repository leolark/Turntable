// switching the color theme of the site
let date = new Date(); 
let h = date.getHours();

function onlyTime() {
    if (h>22 || h<5) document.getElementById("style").href = "night.css";
    if (h>4 && h<12) document.getElementById("style").href = "morning.css";
    if (h>11 && h<18) document.getElementById("style").href = "day.css";
    if (h>20 && h<23) document.getElementById("style").href = "evening.css";
}

let onlyTimer = setInterval(() => onlyTime(), 100);
