require('dotenv').config();
const axios = require('axios');

const [ ,, ...args ] = process.argv;

const city = args[0];
const unit = args[1] || "metric";
const key = process.env.API_KEY;

const api = axios.create({ baseURL: "https://api.openweathermap.org/data/2.5" });

const formatCity = data =>
{
    return data.name + ", " + data.sys.country;
};

const formatTemperature = data =>
{
    return `${ data.main.temp.toFixed() }${ unit === "metric" ?  "°C" : "°F" }`
}

const formatForecast = data =>
{
    const forecastData = data.data.list;

    const forecastArr = forecastData.map((forecast, i) =>
    {
        let date = new Date();
        date.setTime(forecast.dt * 1000);

        return {
            day: date.getDay(),
            hour: date.getHours(),
            temperature: formatTemperature(forecast)
        };
    });

    return forecastArr;
}

const app = async () =>
{
    try
    {
        const res = await api.get("/weather",
        {
            params:
            {
                q: city,
                appid: key,
                units: unit
            }
        });

        const res2 = await api.get("/forecast",
        {
            params:
            {
                q: city,
                appid: key,
                units: unit
            }
        });

        const data = res.data;

        console.log(
            `It is now ${ formatTemperature(data) } in ${ formatCity(data) }\n` +
            `The current weather conditions are: ${ data.weather[0].description }\n\n` + 
            "Forecast:"
        );
        
        console.log(formatForecast(res2));
        
    }
    catch (err)
    {
        console.error(err);
    }
}

app();
