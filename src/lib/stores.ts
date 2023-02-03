import {readable, writable, type Writable, type Readable} from 'svelte/store';
import { en } from "./language-selector/languages.js"
import type {Links} from "./menu/MenuService";


export const MOBILE_BREAKPOINT: Readable<number> = readable(700);

export const currentLanguage: Writable<any> = writable(en);

export const username: Writable<string> = writable("");

export const currentPart: Writable<Links> = writable("hello");