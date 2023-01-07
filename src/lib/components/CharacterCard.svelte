<script lang="ts">
	import Card from '@smui/card';
	import List, { Item, Text } from '@smui/list';
	import type { Character } from '$lib/types';
	export let character: Character;
	export let defaultAvatar: string = 'no-profile-picture-icon.png';
</script>

<div class="card-container">
	<Card padded variant="outlined">
		<p>This is a Character Card for {character.name}</p>
		<img class="avatar" src={defaultAvatar} alt="Character Avatar" />
		<List>
			<Item><Text>Gold: {character.gold}</Text></Item>
			<Item><Text>Experience: {character.experiencePoints}</Text></Item>
		</List>
	</Card>
</div>

<style>
	.avatar {
		max-width: 200px;
	}
</style>
