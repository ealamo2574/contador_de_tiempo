const countdownDate = new Date("November 27, 2024 22:00:00").getTime();
let interval;

function updateTimeDisplay() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("days").innerText = "0";
        document.getElementById("hours").innerText = "0";
        document.getElementById("minutes").innerText = "0";
        document.getElementById("seconds").innerText = "0";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

function displayTime() {
    updateTimeDisplay();
    interval = setInterval(updateTimeDisplay, 1000);
}

// Inicializar
displayTime();
