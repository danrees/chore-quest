<script lang="ts">
	import PersonCard from '$lib/components/PersonCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<h1>Main Page</h1>
	{#if data.user}
		<PersonCard player={data.user} />
	{/if}
</div>
