<script lang="ts">
	import Search from '@lucide/svelte/icons/search';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { Input } from '#lib/components/ui/input/index.ts';
	import Button from './ui/button/button.svelte';
</script>

<!-- Search Bar-->
<div class="flex items-center gap-2">
	<div class="relative w-full max-w-xs">
		<Search class="-h-4 absolute top-1/2 left-3 w-4 -translate-y-1/2 text-muted-foreground" />
		<Input placeholder="Search ..." class="w-full pl-9" />
	</div>
	<Button variant="default" size="icon" class="">
		<ArrowRightIcon class="h-4 w-4" />
	</Button>
</div>
