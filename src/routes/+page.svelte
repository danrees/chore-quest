<script lang="ts">
	import PersonCard from '$lib/components/PersonCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const player = {
		name: data.name || '',
		email: data.email || '',
		avatar: data.avatar || 0,
		id: data.id || ''
	};
</script>

<div>
	<h1>Main Page</h1>
	<PersonCard {player} />
</div>
