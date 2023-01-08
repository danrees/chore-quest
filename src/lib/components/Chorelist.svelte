<script lang="ts">
	import type { Chore, Player } from '$lib/types';
	import Card from '@smui/card';
	import DataTable, { Head, Row, Cell, Body } from '@smui/data-table';
	import PlayerIcon from './PlayerIcon.svelte';

	export let chores: Chore[];
	export let users: Player[];

	const player = {
		name: 'Test',
		id: 'test',
		email: 'test',
		avatar: 0
	};
</script>

<div>
	<Card>
		<DataTable>
			<Head>
				<Row>
					<Cell>Chore</Cell>
					<Cell>Freq</Cell>
					<Cell>Assign</Cell>
				</Row>
			</Head>
			<Body>
				{#each chores as chore}
					<Row>
						<Cell>{chore.name}</Cell>
						<Cell>{chore.frequency}</Cell>
						<Cell>
							<PlayerIcon {player} action={() => alert('clicked')} />
						</Cell>
					</Row>
				{/each}
			</Body>
		</DataTable>
	</Card>
</div>
