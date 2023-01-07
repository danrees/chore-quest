<script lang="ts">
	import Chorelist from '$lib/components/Chorelist.svelte';
	import PersonCard from '$lib/components/PersonCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<h1>Main Page</h1>
	<Chorelist chores={data.chores || []} />
</div>
