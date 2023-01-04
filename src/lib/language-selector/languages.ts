export const en = {
    "inProgress": "Work in progress...",
    "contact": "Contact Me",
    "contactSubject": "Contact request",
    "hello": {
        "hello": "Hi",
        "namePlaceholder": "Your name",
        "nameReason": "Enter your name if you want to be addressed directly. (name is never stored)",
        "continue": "Continue",
    },
    "welcome": {
        "welcome": "Welcome",
        "to": "to",
        "my": "my",
    },
    "currentDoing": {
       "question": "What I currently do",
        "answer": "I am in the fourth year of my apprenticeship as a Computer Scientist at Swisslog AG. By August I plan to create Webpages for small Companies or private people.",
        "action": "If you{}are interested in getting a brand new Website, please contact me via E-Mail.",
    },
}

export const de = {
    "inProgress": "Noch in arbeit...",
    "contact": "Kontaktiere mich",
    "contactSubject": "Kontaktanfrage",
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
    "currentDoing": {
        "question": "Was ich jetzt mache",
        "answer": "Ich bin im vierten Lehrjahr als Informatiker bei der Swisslog AG. Ab August plane ich Webseiten für kleine Unternehmen oder privat Personen zu erstellen.",
        "action": "Falls du{}dich für eine neue Webseite von mir interessierst kannst du mich gerne via E-Mail kontaktieren.",
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