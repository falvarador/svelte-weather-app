<script>
    import MediaQuery from "./common/media-query.svelte";

    export let humidity = 0,
        windspeed = 0,
        feelslike = 0;
</script>

<hr />
<MediaQuery query="(max-width:576px)" let:matches>
    <aside class:mobile={matches}>
        <section>
            <span>{humidity}%</span>
            <span>Humidity</span>
        </section>
        <section>
            <span>{windspeed} km/h</span>
            <span>Windspeed</span>
        </section>
        <section>
            <span>{feelslike}°</span>
            <span>Feels like</span>
        </section>
    </aside>
</MediaQuery>

<style>
    aside {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 0.75rem 2rem;
        width: 80%;
    }

    section {
        margin: 0 auto;
        padding: 0.7rem;
    }

    span {
        display: block;
        text-align: center;
    }

    .mobile {
        flex-direction: column;
    }
</style>
