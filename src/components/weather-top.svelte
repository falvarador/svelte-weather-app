<script>
    import MediaQuery from "./common/media-query.svelte";

    export let locationName = "",
        country = "",
        icon = "";
</script>

<MediaQuery query="(max-width:576px)" let:matches>
    <section class:mobile={matches}>
        <div>
            <h1>{locationName}</h1>
            <span>{country}</span>
        </div>
        <img src={icon} alt="weather icon" />
    </section>
</MediaQuery>

<style>
    section {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0;
    }

    h1 {
        font-weight: 300;
        margin: 0;
        text-transform: uppercase;
    }

    img {
        height: 5rem;
        width: 5rem;
    }

    .mobile {
        flex-direction: column-reverse;
        text-align: center;
    }
</style>
