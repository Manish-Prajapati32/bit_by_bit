
// For Date, Time and Day
function date_time() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];

    document.getElementById("date").textContent = `Date : ${date}`;
    document.getElementById("day").textContent = `Day : ${day}`;
    document.getElementById("time").textContent = `Time : ${time}`;

}

setInterval(date_time,1000);
date_time();

// For Weather API
function Weather() {
    const city = document.getElementById("city").value.trim();
    console.log(`${city}`);
    
    if(!city) {
        document.getElementById("weather").innerText = "Please Enter a City name.";
        return;
    }
    const weatherapi = 

}
Weather();

