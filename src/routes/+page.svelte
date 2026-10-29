<script lang="ts">
	import { onMount } from 'svelte';
	import { io, type Socket } from 'socket.io-client';

	let socket: Socket;

	onMount(() => {
		socket = io();

		return () => {
			socket.disconnect();
		};
	});
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<h1>This is my sveltekit project for party game</h1>

<div class="flex h-screen items-center justify-center">
</div>
