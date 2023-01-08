<script lang="ts">
	import Chorelist from '$lib/components/Chorelist.svelte';
	import PersonCard from '$lib/components/PersonCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<div>
	<h1>Quest Board</h1>
	<Chorelist chores={data.chores || []} users={data.players || []} />
</div>
