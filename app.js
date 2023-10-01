const countdownDate = new Date();
        countdownDate.setDate(countdownDate.getDate() + 60); // 30 days from now

        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");

        const countdownInterval = setInterval(function() {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance <= 0) {
                clearInterval(countdownInterval);
                daysElement.textContent = "00";
                hoursElement.textContent = "00";
                minutesElement.textContent = "00";
                secondsElement.textContent = "00";
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                daysElement.textContent = days < 10 ? `0${days}` : days;
                hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
                minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
                secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
            }
        }, 1000);

const notifyButton = document.getElementById("notifyButton");
notifyButton.addEventListener("click", function() {
    const emailInput = document.querySelector("input[type=email]");
    const email = emailInput.value;
     if (email) {
        alert(`You will be notified at ${email} when the songs are available.`);
        emailInput.value = '';
    } else {
        alert("Please enter a valid email address.");
    }
});