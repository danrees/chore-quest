<script lang="ts">
	import type { Chore } from '$lib/types';
	import Card, { Content } from '@smui/card';
	export let quest: Chore;
</script>

<Card>
	<Content>
		<h2>{quest.name}</h2>
		{#if quest.description}
			<p>{quest.description}</p>
		{/if}
	</Content>
</Card>
