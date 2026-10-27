
const weatherData = {
    sunny: {
        icon: "☀️",
        title: "Sunny Weather",
        description: "Bright sunshine and clear skies. A great day to enjoy outdoor activities!"
    },
    cloudy: {
        icon: "☁️",
        title: "Cloudy Weather",
        description: "Clouds cover the sky. The sunlight may be limited today."
    },
    rainy: {
        icon: "🌧️",
        title: "Rainy Weather",
        description: "Rain is falling. Carry an umbrella when going outside."
    },
    stormy: {
        icon: "⛈️",
        title: "Stormy Weather",
        description: "Thunderstorms may occur. Stay indoors and remain safe."
    },
    snowy: {
        icon: "❄️",
        title: "Snowy Weather",
        description: "Snowflakes are falling. Wear warm clothes and stay comfortable."
    },
    foggy: {
        icon: "🌫️",
        title: "Foggy Weather",
        description: "Fog reduces visibility. Drive slowly and carefully."
    }
};

const weatherSelect = document.getElementById("weatherSelect");
const weatherIcon = document.getElementById("weatherIcon");
const weatherTitle = document.getElementById("weatherTitle");
const weatherDescription = document.getElementById("weatherDescription");

weatherSelect.addEventListener("change", function () {
    const condition = this.value;

    document.body.className = "";

    if (condition === "") {
        weatherIcon.textContent = "🌍";
        weatherTitle.textContent = "Welcome!";
        weatherDescription.textContent =
            "Select a weather condition above.";
        return;
    }

    const weather = weatherData[condition];

    if (!weather) return;

    document.body.classList.add(condition);

    weatherIcon.textContent = weather.icon;
    weatherTitle.textContent = weather.title;
    weatherDescription.textContent = weather.description;
});
