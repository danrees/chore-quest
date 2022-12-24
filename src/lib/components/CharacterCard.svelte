<script lang="ts">
	import Card from '@smui/card';
	import type { Character } from '$lib/types';
	export let character: Character;
</script>

<div class="card-container">
	<Card padded variant="outlined">
		<p>This is a Character Card for {character.name}</p>
	</Card>
</div>
