import CharacterCard from './CharacterCard.svelte';
import avatar from '../../../static/no-profile-picture-icon.png';

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
				experiencePoints: 100,
				avatar: avatar
			}
		}
	})
};
