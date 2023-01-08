<script lang="ts">
	import type { PageData } from './$types';
	import ChoreCard from '$lib/components/ChoreCard.svelte';

	export let data: PageData;
</script>

<div>
	{#if data?.chore}
		<ChoreCard quest={data.chore} />
	{:else}
		<div>Unable to load quest</div>
	{/if}
</div>
