/**
 * @param {string} steamid64
 */
export default async function (steamid64) {
    const response = await fetch(`https://steam.dev.madhouselabs.net/profiles/${steamid64}/?xml=1`);
    const xml = await response.text();

    const document = new DOMParser().parseFromString(xml, "text/xml");

    return {
        name: document.getElementsByTagName("steamID")[0].textContent,
        avatar: document.getElementsByTagName("avatarFull")[0].textContent,
    };
}
