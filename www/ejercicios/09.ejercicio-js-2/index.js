'use strict';

setInterval(() => {
    const now = new Date();

    let days = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }

    let h1 = (document.querySelector(
        'h1'
    ).innerHTML = `Hoy es día ${days} y son las ${hours}:${minutes}:${seconds}`);
}, 5000);
