import { writable } from "svelte/store";

const createTheme = () => {
    const { subscribe, set } 
        = writable((localStorage.getItem("theme") || "auto"));

    const handleThemeChange = (theme) => {
        localStorage.setItem("theme", theme);

            if(theme === "auto") {
                document.documentElement.removeAttribute("data-theme");
            }

            document.documentElement.setAttribute("data-theme", theme);
    }

    return {
        subscribe,
        setTheme: (theme) => {
            set(theme)
            handleThemeChange(theme);
        }
    }
}

export const themeStore = createTheme();