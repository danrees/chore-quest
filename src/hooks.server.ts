import type { Player } from '$lib/types';
import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
	//console.log('loading pb');
	event.locals.pb = new PocketBase('http://127.0.0.1:8090');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '', 'sessionid');

	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
			const user = event.locals.pb.authStore.model;
			if (user) {
				event.locals.user = Object.assign({}, user);
			}
		}
	} catch (err) {
		event.locals.pb.authStore.clear();
		event.locals.user = undefined;
	}

	const response = await resolve(event);
	const isProd = process.env.NODE_ENV === 'production' ? true : false;
	response.headers.set(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie(
			{ secure: isProd, sameSite: 'Lax', path: '/' },
			'sessionid'
		)
	);
	return response;
};
