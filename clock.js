const clockContainer = document.querySelector(".clock"),
    clockTitle = clockContainer.querySelector("h2");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const days = date.getDate();
    const years = date.getFullYear();
    const month = date.getMonth() + 1;
    clockTitle.innerText = `${days}. ${month}. ${years}, ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();