const weatherData = {
    "hà nội": {
        temperature: 28,
        humidity: 65,
        windSpeed: 10,
        description: "Mưa rào",
        icon: "🌧️"
    },

    "hồ chí minh": {
        temperature: 34,
        humidity: 80,
        windSpeed: 5,
        description: "Nắng gắt",
        icon: "☀️"
    },

    "đà nẵng": {
        temperature: 30,
        humidity: 78,
        windSpeed: 6,
        description: "Nhiều mây",
        icon: "⛅"
    }
};

// lấy nút tìm kiếm

let searchBTN = document.querySelector(".btnsearch");
searchBTN.addEventListener("click", searchclick);


// lấy phần content
let contentbody = document.querySelector(".content");
contentbody.innerHTML = "";
function searchclick() {
    // lấy giá trị từ ô nhập
    let inputtext = document.querySelector(".input").value.trim();
    inputtext=inputtext.toLowerCase();
    //validate
    if (inputtext === "") {
        alert("không có thông tin");
        return;
    }

    if (!Object.keys(weatherData).includes(inputtext)) {
        contentbody.textContent = `khoong chó thông tin`;
        return;
    }

    // hiển thị thông tin
    viewweather(weatherData[inputtext], contentbody,inputtext)
}
function viewweather(A, contentbody, input) {
    contentbody.innerHTML = `
        <h2>${input.toUpperCase()}</h2>
        <div class="itemt">
            <p>${A.icon}</p>
            <p>Nhiệt độ: ${A.temperature}°C</p>
            <div class="mini">
                <p>${A.description}</p>
                <p>Độ ẩm: ${A.humidity}%</p>
                <p>Tốc độ gió: ${A.windSpeed} km/h</p>
            </div>
        </div>
    `;
}
