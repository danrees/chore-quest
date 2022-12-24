import CharacterCard from './CharacterCard.svelte';

export default {
	title: 'CharacterCard',
	component: CharacterCard
};

export const Primary = {
	render: () => ({
		Component: CharacterCard,
		props: {
			character: {
				name: 'My Character',
				gold: 5,
				experience: 100
			}
		}
	})
};
