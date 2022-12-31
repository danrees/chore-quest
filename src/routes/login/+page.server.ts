import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals, cookies }) => {
	locals.pb?.authStore.loadFromCookie(cookies.get('sessionid') || '', 'sessionid');
	if (locals.pb?.authStore.isValid) {
		const record = await locals.pb?.collection('users').authRefresh();

		return {
			...record.record
		};
	} else {
		return {
			email: ''
		};
	}
}) satisfies PageServerLoad<{ email?: string; [key: string]: string | undefined }>;

export const actions: Actions = {
	default: async ({ locals, request, cookies }) => {
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

		const cookie = locals.pb?.authStore.exportToCookie({ path: '/' }, 'sessionid');
		console.log(cookie);
		cookies.set('sessionid', cookie || '');

		return {
			success: locals.pb?.authStore.isValid
		};
	}
};
