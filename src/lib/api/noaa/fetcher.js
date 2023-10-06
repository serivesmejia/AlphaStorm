export function json(url, callback) {
    return fetch(url).then(out => out.json()).then(callback)
}