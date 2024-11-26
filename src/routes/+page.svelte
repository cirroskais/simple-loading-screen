<script>
	import { scale } from 'svelte/transition';

	import { gameDetails, statusChanged } from '$lib/events';
	import Slideshow from '$lib/components/Slideshow.svelte';
	import User from '$lib/components/User.svelte';

	import Map from 'lucide-svelte/icons/map';
	import Gamepad2 from 'lucide-svelte/icons/gamepad-2';

	let { data } = $props();
</script>

{#if $gameDetails}
	<div in:scale class="h-screen w-screen">
		<div class="absolute flex h-full w-full items-center justify-center blur-sm">
			<Slideshow />
		</div>
		<div class="relative z-10 flex h-full w-full items-center justify-center">
			<div class="grid w-[42rem] grid-cols-3 gap-2">
				<div class="col-span-3 rounded-lg bg-black/70 p-2 shadow-lg">
					<p class="text-center text-white/50">You're joining</p>
					<p class="text-center text-2xl">{$gameDetails?.servername}</p>
				</div>
				<div class="col-span-3 rounded-lg bg-black/70 p-2 shadow-lg">
					<div class="flex place-content-evenly gap-2 pt-0.5">
						{#each data.staff as member}
							<User {member}></User>
						{/each}
					</div>
				</div>
				<div class="col-span-3 flex w-full gap-2">
					<div class="flex flex-grow overflow-hidden rounded-lg bg-black/70 p-2 shadow-lg">
						<div class="my-auto flex space-x-2">
							<span class="my-auto flex-1 overflow-hidden whitespace-nowrap font-bold"
								>{$statusChanged.status}</span
							>
						</div>
					</div>
					<div class="rounded-lg bg-black/70 p-2 shadow-lg">
						<div class="flex space-x-1">
							<Map />
							<p class="font-bold">{$gameDetails?.mapname}</p>
						</div>
						<div class="flex space-x-1">
							<Gamepad2 />
							<p class="font-bold">{$gameDetails?.gamemode}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="h-screen w-screen">
		<div class="flex h-full w-full items-center justify-center">
			<span class="inline-flex h-6 w-6 animate-ping rounded-full bg-neutral-500"></span>
		</div>
	</div>
{/if}
