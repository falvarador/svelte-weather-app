<script>
    import MediaQuery from "./common/media-query.svelte";

    export let temperature = 0,
        conditionText = "",
        localtime = "";
</script>

<MediaQuery query="(max-width:576px)" let:matches>
    <section class:mobile={matches}>
        <h2>{temperature}°<sup>C</sup></h2>
        <div>
            <h3>{conditionText}</h3>
            <h4>{localtime}</h4>
        </div>
    </section>
</MediaQuery>

<style>
    section {
        align-items: flex-end;
        display: flex;
        justify-content: space-between;
        margin: 0;
    }

    h2 {
        font-size: 6em;
        font-weight: 300;
        margin: 0;
        text-transform: uppercase;
    }

    h3 {
        font-weight: 700;
        margin: 0;
    }

    h4 {
        font-weight: 300;
        text-transform: uppercase;
    }

    sup {
        font-size: 0.5em;
        font-weight: 200;
        margin-left: 0.5rem;
    }

    .mobile {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
</style>
