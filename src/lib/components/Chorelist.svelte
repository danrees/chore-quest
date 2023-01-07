<script lang="ts">
	import type { Chore } from '$lib/types';
	import Card from '@smui/card';
	import DataTable, { Head, Row, Cell, Body } from '@smui/data-table';

	export let chores: Chore[];
</script>

<div>
	<Card>
		<DataTable>
			<Head>
				<Row>
					<Cell>Chore</Cell>
					<Cell>Freq</Cell>
				</Row>
			</Head>
			<Body>
				{#each chores as chore}
					<Row>
						<Cell>{chore.name}</Cell>
						<Cell>{chore.frequency}</Cell>
					</Row>
				{/each}
			</Body>
		</DataTable>
	</Card>
</div>
