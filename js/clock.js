
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    if (fclock == true) {
        if (showseconds) {
            document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
        } else {
            document.getElementById('clock').textContent = `${hours}:${minutes}`;
        }
        return;
    }
    const period = hours >= 12 ? 'PM' : 'AM';
    const hour12 = String(hours % 12 || 12).padStart(2, '0');
    if (showseconds) {
        document.getElementById('clock').textContent = `${hour12}:${minutes}:${seconds} ${period}`;
    } else {
        document.getElementById('clock').textContent = `${hour12}:${minutes} ${period}`;
    }
}

setInterval(updateClock, 1000);
