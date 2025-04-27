/**
 * WeatherForecastClient provides weather data for the startpage using OpenWeatherMap API.
 * Handles fetching and parsing weather information for a given location.
 */
class WeatherForecastClient {
  constructor(location) {
    this.url = `https://wttr.in/${encodeURI(location)}?format=j1`;
  }

  /**
   * Fetch and return the current weather for the configured location.
   * @returns {Promise<{temperature: number, condition: string}>}
   */
  async getWeather() {
    return await fetch(this.url)
      .then((res) => res.json())
      .then((json) => JSON.stringify(json))
      .then((json) => JSON.parse(json))
      .then((data) => {
        const temperature = Math.round(data.current_condition[0].temp_C);
        const condition = data.current_condition[0].weatherCode;

        return {
          temperature,
          condition,
        };
      })
      .catch((err) => console.warn("wttr.in returned an error:", err));
  }
}
