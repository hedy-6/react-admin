export const setCookie = (cookieObj = {}) => {
    for (const key in cookieObj) {
        localStorage.setItem(key, cookieObj[key])
    }
}

export const getCookie = (key) => {
    return localStorage.getItem(key)
}

export const clearCookie = () => {
    localStorage.clear();
}