<script lang="ts">
	import { onMount } from 'svelte';
	import { io, type Socket } from 'socket.io-client';
	import { Button } from '#lib/components/ui/button/index.ts';
	import { Input } from '#lib/components/ui/input/index.ts';
	import * as Card from '#lib/components/ui/card/index.ts';
	import Search from '@lucide/svelte/icons/search';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';

	let socket: Socket;

	onMount(() => {
		socket = io();

		return () => {
			socket.disconnect();
		};
	});
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<div class="flex h-screen flex-col items-center justify-center">
	<Card.Root class="mt-10 mb-10 h-screen w-full max-w-sm text-center font-mono text-4xl font-bold">
		<Card.Header>
			<!--Search Bar-->
			<div class="flex items-center gap-2">
				<div class="relative w-full max-w-xs">
					<Search class="-h-4 absolute top-1/2 left-3 w-4 -translate-y-1/2 text-muted-foreground" />
					<Input placeholder="Search ..." class="w-full pl-9" />
				</div>
				<Button variant="default" size="icon" class="">
					<ArrowRightIcon class="h-4 w-4" />
				</Button>
			</div>
		</Card.Header>
		<hr class="border-t border-border" />
		<Card.Content>Busted!</Card.Content>
		<hr class="border-t border-border" />
	</Card.Root>
</div>
