export const en = {
    "inProgress": "Work in progress ...",
    "contact": "Contact Me",
    "contactSubject": "Contact request",
    "hello": {
        "welcome": "Welcome",
        "namePlaceholder": "Your name",
        "nameReason": "Enter your name if you want to be addressed directly. (name is never stored)",
        "continue": "Continue",
    },
}

export const de = {
    "inProgress": "Noch in arbeit ...",
    "contact": "Kontaktiere mich",
    "contactSubject": "Kontaktanfrage",
    "hello": {
        "welcome": "Willkommen",
        "namePlaceholder": "Dein Name",
        "nameReason": "Gib dein Name ein damit ich dich direkt ansprechen kann. (wird nicht gespeichert)",
        "continue": "Weiter",
    },
}

export type Languages = "EN" | "DE";

export function getLanguage(lang: Languages): any {
    switch (lang) {
        case "DE":
            return de;
        default:
            return en;
    }
}