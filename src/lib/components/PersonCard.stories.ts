import PersonCard from './PersonCard.svelte';

export default {
	title: 'PersonCard',
	component: PersonCard
};

export const Primary = {
	render: () => ({
		Component: PersonCard,
		props: {
			player: {
				name: 'Test User',
				login: 'testuser@email.com',
				characters: []
			}
		}
	})
};
