import { writable } from 'svelte/store';

//read darkmode from lokalstorage
//export const darkMode = writable(localStorage.getItem('darkMode'));
export const darkMode = writable(false);

