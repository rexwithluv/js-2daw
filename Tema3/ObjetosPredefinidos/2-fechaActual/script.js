const TIME = 20000;

const interval = setInterval(() => {
    const CURRENT_DATE = new Date();

    const DAY = CURRENT_DATE.getDate();
    const MONTH = (CURRENT_DATE.getMonth() + 1).toString().padStart(2, "0");
    const YEAR = CURRENT_DATE.getFullYear().toString().padStart(2, "0");

    const HOUR = CURRENT_DATE.getHours().toString().padStart(2, "0");
    const MINUTES = CURRENT_DATE.getMinutes().toString().padStart(2, "0");
    const SECONDS = CURRENT_DATE.getSeconds().toString().padStart(2, "0");

    document.getElementById("today").innerHTML = `${HOUR}:${MINUTES}:${SECONDS} - ${DAY}/${MONTH}/${YEAR}`;

    clearInterval(interval);

}, TIME);