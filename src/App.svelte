<script>
  import { onMount } from "svelte";

  import Aside from "$/lib/aside.svelte";
  import Footer from "$/lib/footer.svelte";
  import Loading from "$/lib/common/loading.svelte";
  import Search from "$/lib/common/search.svelte";
  import WeatherBottom from "$/lib/weather-bottom.svelte";
  import WeatherTop from "$/lib/weather-top.svelte";

  import { getWeather } from "$/services/weather";

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
    {:catch error}
      <p>{error}</p>
    {/await}
  </article>

  <Footer />
</main>

<style>
  article {
    margin: 0;
  }
</style>
