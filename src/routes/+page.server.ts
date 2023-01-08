import type { Character, Chore } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const chores = await locals.pb?.collection('chores').getList<Chore>(1, 50);
	const players = await locals.pb?.collection('players').getList<Character>(1, 5);

	return {
		chores: chores?.items.map((chore) => structuredClone(chore)),
		players: players?.items.map((player) => structuredClone(player))
	};
}) satisfies PageServerLoad;
