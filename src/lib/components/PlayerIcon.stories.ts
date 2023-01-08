import PlayerIcon from './PlayerIcon.svelte';
import avatar from '../../../static/no-profile-picture-icon.png';

export default {
	title: 'PlayerIcon',
	component: PlayerIcon
};

export const Primary = {
	render: () => ({
		Component: PlayerIcon,
		props: {
			player: {
				name: 'player 1'
			},
			defaultAvatar: avatar
		}
	})
};
