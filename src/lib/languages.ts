export const en = {
    "header": "Hello",
    "nav": {
        "languages": "Languages"
    }
}

export const de = {
    "header": "Hallo",
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