import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const user = locals.user;
	if (user) {
		return {
			user: user
		};
	}
}) satisfies LayoutServerLoad;
