import ChoreCard from './ChoreCard.svelte';

export default {
	title: 'ChoreCard',
	component: ChoreCard
};

export const Primary = {
	render: () => ({
		Component: ChoreCard,
		props: {
			quest: {
				name: 'Chore 1',
				description: 'do chore one',
				frequency: 'daily'
			}
		}
	})
};
