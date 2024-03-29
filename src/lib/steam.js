/**
 * @param {string} steamid64
 */
export default async function (steamid64) {
    const response = await fetch(`https://steamcommunity.com/profiles/${steamid64}/?xml=1`);
    const xml = await response.text();

    const document = new DOMParser().parseFromString(xml, "text/xml");

    console.log(document);
}
