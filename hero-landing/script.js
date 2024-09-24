async function getWeather() {
    const url = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?lat=50.450001&lon=30.523333&cnt=9&units=metric&exclude=hourly,minutely&appid=6ec92d4e1ea53c9aa3ccb8e1ab62e67f";

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        const todayTemp = json.list[0]["main"]["temp"];
        const tomorrowTemp = json.list[8]["main"]["temp"];

        document.getElementById("today").innerHTML = "Kyiv +"+Math.ceil(todayTemp)+"&deg;";
        document.getElementById("tomorrow").innerHTML = "Kyiv +"+Math.ceil(tomorrowTemp)+"&deg;";

        let popupBg = document.querySelector('.popup__bg');
        let popup = document.querySelector('.popup');

        popupBg.classList.add('active');
        popup.classList.add('active');

        document.addEventListener('click', (e) => {
            if(e.target === popupBg) {
                popupBg.classList.remove('active');
                popup.classList.remove('active');
            }
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('uemail').value;
    if (email === '') {
        alert('Please fill out email.');
        return;
    }
    const expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = 'user_email=' + email + ';expires=' + expires.toUTCString();
    console.log('Email:', email);

    document.getElementById('emailForm').reset();
    alert('Form submitted successfully!');
});

