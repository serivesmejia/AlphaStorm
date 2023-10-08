export function fetchJson(url, callback) {
    return fetch(url).then(out => out.json()).then(callback)
}