<script lang="ts">
    import { onMount } from 'svelte';
    import { io, type Socket } from 'socket.io-client';

    let socket: Socket;

    onMount(() => {
        socket = io();

        return () => {
            socket.disconnect();
        }
    })
</script>



<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<h1 class="text-3xl font-bold">hello everybody my name is marketplier</h1>