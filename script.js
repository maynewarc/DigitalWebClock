function updateClock() {
    const curTime = new Date();
    let hours = curTime.getHours();
    const isPM = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12 || 12).toString().padStart(2, '0');
    const minutes = curTime.getMinutes().toString().padStart(2, '0');
    const seconds = curTime.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds} ${isPM}`;
    document.getElementById('myClock').textContent = formattedTime;
}

updateClock();
setInterval(updateClock, 1000);