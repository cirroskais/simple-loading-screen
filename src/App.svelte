<script>
    import { scale } from "svelte/transition";
    import { Map, Gamepad2 } from "lucide-svelte";
    import { staff } from "./config.json";
    import { gameDetails, downloadingFile, statusChanged } from "./lib/events";
    import Slideshow from "./lib/Slideshow.svelte";
    import User from "./lib/User.svelte";
</script>

{#if $gameDetails}
    <div in:scale class="w-screen h-screen">
        <div class="flex absolute justify-center items-center w-full h-full blur-sm">
            <Slideshow />
        </div>
        <div class="flex relative z-10 justify-center items-center w-full h-full">
            <div class="w-[42rem] grid grid-cols-3 gap-2">
                <div class="col-span-3 p-2 rounded-lg shadow-lg bg-black/70">
                    <p class="text-center text-white/50">You're joining</p>
                    <p class="text-2xl text-center">{$gameDetails?.servername}</p>
                </div>
                <div class="col-span-3 p-2 rounded-lg shadow-lg bg-black/70">
                    <div class="flex gap-2 place-content-evenly pt-0.5">
                        {#each staff as member}
                            <User steamid={member.steamid} color={member.color}></User>
                        {/each}
                    </div>
                </div>
                <div class="flex col-span-3 gap-2 w-full">
                    <div class="flex overflow-hidden flex-grow p-2 rounded-lg shadow-lg bg-black/70">
                        <div class="flex my-auto space-x-2">
                            <span class="overflow-hidden flex-1 my-auto font-bold whitespace-nowrap"
                                >{$statusChanged.status}</span
                            >
                        </div>
                    </div>
                    <div class="p-2 rounded-lg shadow-lg bg-black/70">
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
    <div class="w-screen h-screen">
        <div class="flex justify-center items-center w-full h-full">
            <span class="inline-flex w-6 h-6 rounded-full animate-ping bg-neutral-500"></span>
        </div>
    </div>
{/if}
