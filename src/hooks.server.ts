import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
	console.log('loading pb');
	event.locals.pb = new PocketBase('http://127.0.0.1:8090');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '', 'sessionid');

	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
		}
	} catch (err) {
		event.locals.pb.authStore.clear();
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
