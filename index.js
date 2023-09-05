console.log("hi");
// 
const apiKey = "44ba7a4e9f1a43f7adbb406911b28274";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-image");

async function weatherData(city){
    let response = await fetch(url + city + `&appid=${apiKey}`);
// console.log(response);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    let data = await response.json();

    console.log(data);
    // console.log(data.name);
    // console.log(data.main.temp);
    // console.log(data.main.humidity);
    // console.log(data.wind.speed);

    //update the values
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp)+"&degC";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";


    //update image
    // if(data.weather[0].main == "Clear"){
    //     // weatherImage.src = "data.weather[0].icon";
    //     weatherImage.src = "./images/clear.png";
    // }
    // else if(data.weather[0].main == "Mist"){
    //     weatherImage.src = data.weather[0].icon;
    //     // weatherImage.src = "./images/mist.png";
    // }

    switch (data.weather[0].main){
        case "Clear" : weatherImage.src = "./images/clear.png";
            break;
        case "Mist" : weatherImage.src = "./images/mist.png";
            break;
        case "Clouds" : weatherImage.src = "./images/clouds.png";
            break;
        case "drizzle" : weatherImage.src = "./images/drizzle.png";
            break;
        case "Rain" : weatherImage.src = "./images/rain.png";
            break;
        case "Snow" : weatherImage.src = "./images/snow.png";
            break;
        default: weatherImage.src = "./images/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".search input").value = ""; //clear the input field
    document.querySelector(".error").style.display = "none";
    // document.querySelector(".card").style.margin = "50px auto ";
    }
    

}

searchBtn.addEventListener("click", ()=>weatherData(searchBox.value));
// weatherData("china");