<script>
  import Aside from "./components/aside.svelte";
  import Footer from "./components/footer.svelte";
  import Loading from "./components/common/loading.svelte";
  import Search from "./components/common/search.svelte";
  import WeatherBottom from "./components/weather-bottom.svelte";
  import WeatherTop from "./components/weather-top.svelte";

  import { getWeather } from "./services/weather";

  let weatherPromise = getWeather();
</script>

<main class="container">
  <Search
    on:search={(e) => {
      weatherPromise = getWeather(e.detail.search);
    }}
  />

  <article>
    {#await weatherPromise}
      <Loading />
    {:then { locationName, country, icon, temperature, conditionText, localtime, feelsLike, humidity, windSpeed }}
      <WeatherTop {locationName} {country} {icon} />
      <WeatherBottom {temperature} {conditionText} {localtime} />
      <Aside feelslike={feelsLike} {humidity} windspeed={windSpeed} />
    {:catch e}
      <p>{e}</p>
    {/await}
  </article>

  <Footer />
</main>

<style>
  article {
    margin: 0;
  }
</style>
