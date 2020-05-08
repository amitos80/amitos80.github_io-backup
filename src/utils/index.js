const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const localStorageSet = (key, value, ttl) => {
    if (typeof window === 'undefined') { return }
    const item = {
        value: value,
        expiry: new Date().getTime() + ttl
    }
    localStorage.setItem(key, JSON.stringify(item))
}

const localStorageGet = (key) => {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
        return undefined;
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return undefined
    }
    return item.value
}

export { isMobile, localStorageSet, localStorageGet };
