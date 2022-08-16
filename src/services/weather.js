/* eslint-disable camelcase */
import { httpHelper } from '$/helpers/http-helper'
import { watchPosition } from '$/helpers/location-helper'

const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3f9f1fda3emshad21d0f74e6a291p145ddbjsn31b3c933453f',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
}

const http = httpHelper()

export const getWeather = async (query = null) => {
  const currentPosition = await watchPosition()

  if (query === null) {
    const { error } = currentPosition
    query = error ? 'Costa Rica' : `${currentPosition.lat},${currentPosition.long}`
  }

  const response = await http.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, OPTIONS)

  if (response.error) {
    const { error } = await response.body
    const { message } = error
    throw message
  }

  const { location, current } = response
  const { country, localtime, name } = location
  const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current
  const { code, icon, text } = condition

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
  }
}
