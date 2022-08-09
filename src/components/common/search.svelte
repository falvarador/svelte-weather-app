<script>
    import { createEventDispatcher } from "svelte";

    let input = "";
    let dispatcher = createEventDispatcher();

    function onSubmit(e) {
        const formData = Object.fromEntries(new FormData(e.target));
        dispatcher("search", {
            search: formData.search,
        });
    }
</script>

<form on:submit|preventDefault={onSubmit}>
    <input
        type="search"
        id="search"
        name="search"
        placeholder="Search"
        autocomplete="off"
        bind:value={input}
    />
</form>

<style>
    form {
        margin-bottom: 0;
        margin-top: 1rem;
    }
</style>
