const getHour = document.querySelector('.hour');
const getMinute = document.querySelector('.minute');
const getSecond = document.querySelector('.second');
const getTime = document.querySelector('.time');
const getDate = document.querySelector('.date');
const getToggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

getToggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Light Mode'
    }
    else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }

})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const amPM = hours >= 12 ? 'PM' : 'AM';

    getHour.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    getMinute.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    getSecond.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    getTime.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${amPM}`;

    getDate.innerHTML = `${days[day]},${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()
setInterval(setTime, 1000);