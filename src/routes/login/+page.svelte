<script lang="ts">
	import TextField from '@smui/textfield';
	import Button from '@smui/button';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let username = '';
	let password = '';

	const login = (username: string, password: string) => {};
</script>

<div>
	<div>
		<p>Welcome {data.name || data.email}</p>
		{#if form?.success}
			<p>Successfully logged in</p>
		{/if}
	</div>
	<form method="POST">
		<TextField bind:value={username} label="Username" input$name="username" />
		<TextField type="password" bind:value={password} label="Password" input$name="password" />
		<Button>Login</Button>
	</form>
</div>
