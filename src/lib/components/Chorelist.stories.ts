import Chorelist from './Chorelist.svelte';

export default {
	title: 'Chorelist',
	component: Chorelist
};

export const Primary = {
	render: () => ({
		Component: Chorelist,
		props: {
			chores: [
				{
					name: 'Chore 1',
					frequency: 'daily'
				},
				{
					name: 'Chore 2',
					frequency: 'weekly'
				},
				{
					name: 'Chore 1',
					frequency: 'monthly'
				}
			]
		}
	})
};
