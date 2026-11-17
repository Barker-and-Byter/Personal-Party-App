<script lang="ts">
	import { onMount } from 'svelte';
	import { io, type Socket } from 'socket.io-client';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { Input } from '#lib/components/ui/input/index.ts';
	import * as Card from '#lib/components/ui/card/index.ts';
	import BustedLogo from '#lib/assets/WomenGasping.png';

	let socket: Socket;

	onMount(() => {
		socket = io();

		return () => {
			socket.disconnect();
		};
	});
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<div class="mt-10 flex h-screen flex-col items-center">
	<a href="Auth/login" class="mb-20 block w-full max-w-sm">
	<Card.Root
	class="mb-20 w-full max-w-sm overflow-hidden py-0 text-center font-mono text-4xl font-bold"
	>
		<Card.Header class="flex flex-row items-center justify-center">
			<img src={BustedLogo} alt="Busted Logo" class="h-40 w-auto object-contain" />
			<span class="font-cloudy font-bold">Busted!</span>
		</Card.Header>
	</Card.Root>
	</a>
</div>
