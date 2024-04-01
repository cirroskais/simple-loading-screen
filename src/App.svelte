<script>
    import { scale } from "svelte/transition";
    import { Map, Gamepad2, Disc3 } from "lucide-svelte";
    import { writable } from "svelte/store";
    import { audioMethod } from "./config.json";

    import { gameDetails } from "./lib/events";
    import Slideshow from "./lib/Slideshow.svelte";
    import Playlist from "./lib/Playlist.svelte";
    import Radio from "./lib/Radio.svelte";

    let title = writable();
</script>

{#if $gameDetails}
    <div in:scale class="h-screen w-screen">
        <div class="h-full w-full flex justify-center items-center absolute blur-sm">
            <Slideshow />
            {#if audioMethod === "playlist"}
                <Playlist {title} />
            {:else if audioMethod === "radio"}
                <Radio {title} />
            {/if}
        </div>
        <div class="h-full w-full flex justify-center items-center relative z-10">
            <div class="w-[42rem] grid grid-cols-3 gap-2">
                <div class="bg-black/65 col-span-3 p-2 rounded-lg shadow-lg">
                    <p class="text-center text-white/50">You're joining</p>
                    <p class="text-center text-2xl">{$gameDetails?.servername}</p>
                </div>
                <div class="bg-black/65 col-span-2 p-2 rounded-lg shadow-lg flex overflow-hidden">
                    <div class="flex my-auto space-x-2">
                        <div class="animate-spin my-auto">
                            <Disc3 />
                        </div>
                        <span class="flex-1 my-auto whitespace-nowrap overflow-hidden">{$title}</span>
                    </div>
                </div>
                <div class="bg-black/65 col-span-1 p-2 rounded-lg shadow-lg">
                    <div class="flex space-x-2">
                        <Map />
                        <p class="font-bold">{$gameDetails?.mapname}</p>
                    </div>
                    <div class="flex space-x-2">
                        <Gamepad2 />
                        <p class="font-bold">{$gameDetails?.gamemode}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
{:else}
    <div class="h-screen w-screen">
        <div class="h-full w-full flex justify-center items-center">
            <span class="inline-flex rounded-full h-6 w-6 bg-neutral-500 animate-ping"></span>
        </div>
    </div>
{/if}
