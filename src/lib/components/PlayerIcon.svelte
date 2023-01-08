<script lang="ts">
	// TODO: see if this can be resizable
	import type { Character } from '$lib/types';
	import Card, { Media } from '@smui/card';
	import Button, { Label } from '@smui/button';
	import PrimaryAction from '@smui/card/src/PrimaryAction.svelte';

	export let player: Character;
	export let defaultAvatar: string = 'no-profile-picture-icon.png';
	export let action: () => void;
	const width = '40px';
</script>

<Card>
	<PrimaryAction />
</Card>
<div class="container" on:click={action} on:keypress={action}>
	<img src={defaultAvatar} alt={player.name} style="--width: {width}" />
	<div class="bottom-left-text">{player.name}</div>
</div>

<style>
	.container {
		position: relative;
		text-align: center;
		color: white;
		-webkit-text-stroke: 0.5px black;
		width: 50px;
		cursor: pointer;
	}
	.bottom-left-text {
		position: absolute;
		bottom: 10px;
		left: 9px;
		font-size: x-small;
	}
	img {
		width: var(--width);
		border-radius: 10px;
	}
</style>
