import { writable, type Writable } from 'svelte/store';
import { en } from "./languages.js"

export const currentLanguage: Writable<any> = writable(en); 

currentLanguage.subscribe(lang => console.log("language changed to", lang));
