<script>
    import MediaQuery from "./common/media-query.svelte";

    import SwitchTheme from "./common/switch-theme.svelte";
</script>

<MediaQuery query="(max-width:576px)" let:matches>
    <footer class:mobile={matches}>
        <small
            >Built with <a
                href="https://svelte.dev/"
                target="_blank"
                rel="noopener noreferrer">Svelte</a
            >
            and love ❤️</small
        >
        <SwitchTheme />
    </footer>
</MediaQuery>

<style>
    footer {
        border-top: 1px solid var(--muted-border-color);
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        margin-top: 1rem;
    }

    small {
        margin-bottom: 1rem;
    }

    .mobile {
        align-items: center;
        flex-direction: column;
    }
</style>
