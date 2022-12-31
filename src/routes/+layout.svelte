<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import AutoAdjust from '@smui/top-app-bar/src/AutoAdjust.svelte';

	let topAppBar: TopAppBar;
</script>

<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar variant="short" bind:this={topAppBar}>
			<Row>
				<Section>
					<Title>Chore Quest</Title>
				</Section>
			</Row>
		</TopAppBar>
		<AutoAdjust {topAppBar}>
			<slot />
		</AutoAdjust>
	</div>
</div>
