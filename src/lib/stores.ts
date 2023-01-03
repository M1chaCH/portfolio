import { writable, type Writable } from 'svelte/store';
import { en } from "./language-selector/languages.js"

export const currentLanguage: Writable<any> = writable(en); 

export const username: Writable<string> = writable("");

currentLanguage.subscribe(lang => console.log("language changed to", lang));
