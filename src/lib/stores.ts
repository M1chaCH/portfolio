import { writable, type Writable } from 'svelte/store';

export type Language = "DE" | "EN";

export const currentLanguage: Writable<Language> = writable("EN"); 

currentLanguage.subscribe(lang => console.log("language changed to", lang));
