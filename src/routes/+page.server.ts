import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export type Output = {
	name?: string;
	email?: string;
	avatar?: number;
	id?: string;
};

export const load = (async ({ locals, cookies }) => {
	locals.pb?.authStore.loadFromCookie(cookies.get('sessionid') || '', 'sessionid');
	if (!locals.pb?.authStore.isValid) {
		throw redirect(303, '/login');
	}
	const auth = await locals.pb?.collection('users').authRefresh();

	return {
		name: auth?.record.name,
		email: auth?.record.email,
		avatar: auth?.record.avatar,
		id: auth?.record.id
	} as Output;
}) satisfies PageServerLoad<Output>;
