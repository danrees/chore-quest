<script lang="ts">
	import Button from '@smui/button';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import AutoAdjust from '@smui/top-app-bar/src/AutoAdjust.svelte';
	import type { LayoutData } from './$types';

	let topAppBar: TopAppBar;
	export let data: LayoutData;
</script>

<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar variant="short" bind:this={topAppBar}>
			<Row>
				<Section>
					<Title><Button href="/">Chore Quest</Button></Title>
				</Section>
				<Section><p>{data?.user?.name || ''}</p></Section>
				<Section><Button href="/login">Login</Button></Section>
			</Row>
		</TopAppBar>
		<AutoAdjust {topAppBar}>
			<slot />
		</AutoAdjust>
	</div>
</div>
