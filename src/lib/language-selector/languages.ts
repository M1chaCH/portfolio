export const en = {
    "hello": {
        "hello": "Hi",
        "namePlaceholder": "Your name",
        "nameReason": "Enter you name if you want to be addressed directly. (name is never stored)",
        "continue": "Continue",
    },
    "welcome": {
        "welcome": "Welcome",
        "to": "to",
        "my": "my",
    },
}

export const de = {
    "hello": {
        "hello": "Hallo",
        "namePlaceholder": "Dein Name",
        "nameReason": "Gib dein Name ein damit ich dich direkt ansprechen kann. (wird nicht gespeichert)",
        "continue": "Weiter",
    },
    "welcome": {
        "welcome": "Willkommen",
        "to": "zu",
        "my": "meinem",
    },
}

export function getLanguage(lang: "EN" | "DE"): any {
    switch (lang) {
        case "DE":
            return de;
        default:
            return en;
    }
}