import type { Actions, PageServerLoad } from './$types';

//export const load = (async ({ locals, cookies }) => {}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData();

		try {
			await locals.pb
				?.collection('users')
				.authWithPassword(
					data.get('username')?.toString() || '',
					data.get('password')?.toString() || ''
				);
			//console.log(resp);
		} catch (err) {
			console.log(err);
		}

		return {
			success: locals.pb?.authStore.isValid
		};
	}
};
