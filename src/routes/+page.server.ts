import config from '$lib/config';
import steam from '$lib/steam';

export async function load() {
	let staff = [];

	for (let { steamid, color } of config.staff) {
		const { name, avatar } = await steam(steamid);
		staff.push({ name, steamid, color, avatar });
	}

	return { staff };
}
