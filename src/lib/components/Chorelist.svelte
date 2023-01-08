<script lang="ts">
	import type { Character, Chore, Player } from '$lib/types';
	import Card from '@smui/card';
	import DataTable, { Head, Row, Cell, Body } from '@smui/data-table';
	import PlayerIcon from './PlayerIcon.svelte';

	export let chores: Chore[];
	export let users: Character[];
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
							{#each users as player}
								<PlayerIcon {player} action={() => alert('clicked')} />
							{/each}
						</Cell>
					</Row>
				{/each}
			</Body>
		</DataTable>
	</Card>
</div>
