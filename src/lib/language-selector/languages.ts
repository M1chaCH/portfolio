export const en = {
    "inProgress": "Work in progress ...",
    "contact": "Contact Me",
    "contactSubject": "Contact request",
    "hello": {
        "welcome": "Hi 🙋‍♂️",
        "namePlaceholder": "Your name",
        "nameReason": "Enter your name if you want to be addressed directly. (name is never stored)",
        "continue": "Continue",
    },
    "overview": {
        "welcome": "Hi",
        "description": "With the next few scrolls I am going to guide you through my life.",
    },
    "menu": {
        "welcome": "Welcome",
        "overview": "Overview",
        "career": "Career",
        "hobbies": "Hobbies",
        "projects": "Projects",
        "skills": "Skills",
    },
}

export const de = {
    "inProgress": "Noch in arbeit ...",
    "contact": "Kontaktiere mich",
    "contactSubject": "Kontaktanfrage",
    "hello": {
        "welcome": "Hallo 🙋‍♂️",
        "namePlaceholder": "Dein Name",
        "nameReason": "Gib dein Name ein damit ich dich direkt ansprechen kann. (wird nicht gespeichert)",
        "continue": "Weiter",
    },
    "overview": {
        "welcome": "Hallo",
        "description": "Mit den nächsten paar scrolls werde ich dich durch mein Leben führen.",
    },
    "menu": {
        "welcome": "Willkommen",
        "overview": "Übersicht",
        "career": "Kariere",
        "hobbies": "Hobbies",
        "projects": "Projekte",
        "skills": "Skills",
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