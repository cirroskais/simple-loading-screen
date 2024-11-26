import { DOMParser } from '@xmldom/xmldom';

export default async function (steamid64: string | number) {
	const response = await fetch(`https://steamcommunity.com/profiles/${steamid64}/?xml=1`);
	const xml = await response.text();

	const document = new DOMParser().parseFromString(xml, 'text/xml');

	return {
		name: document.getElementsByTagName('steamID')[0].textContent,
		avatar: document.getElementsByTagName('avatarFull')[0].textContent
	};
}
