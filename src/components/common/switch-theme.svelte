<script>
    import { themeStore } from "../../stores/theme-store";

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

<!-- <details role="list">
    <summary aria-haspopup="listbox">Theme</summary>
    <ul role="listbox">
        <li>
            <span class:active={$themeStore === "auto"} on:click={setAutoTheme}
                >Auto<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-circle-half"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                    />
                </svg></span
            >
        </li>
        <li>
            <span
                class:active={$themeStore === "light"}
                href="."
                on:click={setLightTheme}
                >Light<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-circle"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                </svg></span
            >
        </li>
        <li>
            <span
                class:active={$themeStore === "dark"}
                href="."
                on:click={setDarkTheme}
                >Dark<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                >
                    <circle cx="8" cy="8" r="8" />
                </svg></span
            >
        </li>
    </ul>
</details> -->

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
