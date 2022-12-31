// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
	type PocketBase = import('pocketbase').default;
	type Player = import('$lib/types').Player;
	interface Locals {
		pb?: PocketBase;
		user?: Player;
	}
}
