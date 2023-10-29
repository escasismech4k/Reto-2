export function getStoredIndex() {
    return localStorage.getItem("currentIndex");
}

export function setStoredIndex(index) {
    localStorage.setItem("currentIndex", index);
}