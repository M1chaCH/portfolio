import { writable, type Writable } from 'svelte/store';
import { en, de } from "./languages.js"

export type Language = "DE" | "EN";

export const currentLanguage: Writable<any> = writable(en); 

currentLanguage.subscribe(lang => console.log("language changed to", lang));
