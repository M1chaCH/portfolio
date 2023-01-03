export const en = {
    "hello": "Hello",
    "namePlaceholder": "Your name",
    "nameReason": "Enter you name if you want to be addressed directly. (name is never stored)",
    "continue": "Continue",
    "nav": {
        "languages": "Languages"
    }
}

export const de = {
    "hello": "Hallo",
    "namePlaceholder": "Dein Name",
    "nameReason": "Bitte gib dein name ein damit ich dich direkt ansprechen kann. (Name wird nie gespeichert)",
    "continue": "Weiter",
    "nav": {
        "languages": "Sprachen"
    }
}

export function getLanguage(lang: "EN" | "DE"): any {
    switch (lang) {
        case "DE":
            return de;
        default:
            return en;
    }
}