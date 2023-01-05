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
    "career": {
        "title": "My Career",
        "body": "My career is still in its early stages. I've started a Computer Scientist Apprenticeship at Swisslog AG in 2019. To this day I am certain that this was the best possible start for me. This Apprenticeship will be finished by the end of July 2023.",
        "body2": "Starting in August 2023 I plan to create websites for small customers. My vision is a fascinating unique web experience that suits perfectly to its content. Additionally the content management for administrators will be easier than ever before.",
        "action": "If you{}are interested in getting a brand new website, please contact me via E-Mail.",
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
    "career": {
        "title": "Meine Karriere",
        "body": "Meine Karriere ist noch in einem sehr frühen Stadium. Ich habe eine Lehre alse Informatiker bei der Swisslog AG im Jahr 2019 gestartet. Und bin mir immer noch sicher, dass das der beste Start für mich ist. Die Lehre werde ich Ende Juli 2023 abgeschlossen haben.",
        "body2": "Ab dem August 2023 plane ich Webseiten für kleinere Kunden zu erstellen. Meine Vision dabei ist ein faszinierendes und einzigartiges Weberlebnis zu kreieren. Zudem soll das Verwalten von Inhalten für Administratoren einfacher denn je sein.",
        "action": "Falls dich{}so eine Webseite interessiert, würde ich mich über ein E-Mail freuen.",
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