const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3f9f1fda3emshad21d0f74e6a291p145ddbjsn31b3c933453f',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export const getWeather = async (query = "London") => {
    try {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, OPTIONS);
        const json = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP status code: ${response.status}`)
        }

        const { location, current } = json;
        const { country, localtime, name } = location;
        const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
        const { code, icon, text } = condition;

        return { 
            conditionCode: code, 
            conditionText: text, 
            country, 
            feelsLike: feelslike_c, 
            humidity, 
            icon,
            isDay: is_day, 
            localtime, 
            locationName: name, 
            temperature: temp_c, 
            windDir: wind_dir, 
            windSpeed: wind_kph 
        };
    } catch (error) {
        return error;
    }
}
