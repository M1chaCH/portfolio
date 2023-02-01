
export type Links = "hello" | "overview" | "career" | "skills" | "hobbies" | "projects"

export const getPositionForVertLink = (linkName: Links) => {
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const sectionPosition = document.getElementById(linkName).getBoundingClientRect().top + window.scrollY;

    const containerHeight = document.getElementById("vertical-menu").offsetHeight;
    return sectionPosition / documentHeight * containerHeight;
};