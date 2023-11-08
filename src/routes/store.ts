import { writable, type PersistentStore } from "@macfja/svelte-persistent-store"

//read darkmode from lokalstorage
//export const darkMode = writable(localStorage.getItem('darkMode'));
export const darkMode = writable("darkMode") as PersistentStore<boolean>;

import { browser } from '$app/environment';

if (browser) {
    darkMode.subscribe((value) => {
        value
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
    });
}
