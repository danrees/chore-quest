import type { Chore } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const chore = await locals.pb?.collection('chores').getOne<Chore>(params.id);
	console.log(chore);
	return {
		chore: structuredClone(chore)
	};
}) satisfies PageServerLoad;
