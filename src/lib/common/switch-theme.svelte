<script>
    import { themeStore } from "$/stores/theme-store";

    const setAutoTheme = () => {
        themeStore.setTheme("auto");
    };

    const setDarkTheme = () => {
        themeStore.setTheme("dark");
    };

    const setLightTheme = () => {
        themeStore.setTheme("light");
    };

    $: {
        $themeStore === "auto"
            ? setAutoTheme()
            : $themeStore === "dark"
            ? setDarkTheme()
            : setLightTheme();
    }
</script>

<details role="list">
    <summary aria-haspopup="listbox">Theme</summary>
    <ul role="listbox">
        <li>
            <label for="small">
                <input
                    type="radio"
                    id="small"
                    name="size"
                    value="small"
                    checked={$themeStore === "auto"}
                    on:click={setAutoTheme}
                />
                Auto
            </label>
        </li>
        <li>
            <label for="medium">
                <input
                    type="radio"
                    id="medium"
                    name="size"
                    value="medium"
                    checked={$themeStore === "light"}
                    on:click={setLightTheme}
                />
                Light
            </label>
        </li>
        <li>
            <label for="large">
                <input
                    type="radio"
                    id="large"
                    name="size"
                    value="large"
                    checked={$themeStore === "dark"}
                    on:click={setDarkTheme}
                />
                Dark
            </label>
        </li>
    </ul>
</details>
