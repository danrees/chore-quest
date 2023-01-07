import type { Chore } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const chores = await locals.pb?.collection('chores').getList<Chore>(1, 50);

	return {
		chores: chores?.items.map((chore) => structuredClone(chore))
	};
}) satisfies PageServerLoad;
