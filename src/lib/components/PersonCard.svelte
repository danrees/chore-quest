<script lang="ts">
	import Card from '@smui/card';
	import type { Player } from '$lib/types';

	export let player: Player;
</script>

<div class="card-container">
	<Card padded variant="outlined">
		<p>This is a Person Card for {player.name}</p>
	</Card>
</div>
