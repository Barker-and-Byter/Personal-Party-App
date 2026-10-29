<script lang="ts">
	import { onMount } from 'svelte';
	import { io, type Socket } from 'socket.io-client';
    import { Button } from '#lib/components/ui/button/index.ts';

	let socket: Socket;

	onMount(() => {
		socket = io();

		return () => {
			socket.disconnect();
		};
	});
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<div class="flex flex-wrap items-center gap-2 md:flex-row">
  <Button size="lg">Button</Button>
</div>
