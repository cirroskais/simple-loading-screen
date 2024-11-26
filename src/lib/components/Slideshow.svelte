<script>
    import { fade } from "svelte/transition";
    import config from "../config";

    let index = Math.floor(Math.random() * config.images.length),
        selected = config.images[index];

    setInterval(function changeImage() {
        index++;
        if (index >= config.images.length) index = 0;
        selected = config.images[index];
    }, 1000 * config.imageDuration);
</script>

<svelte:head>
    {#each config.images as image}
        <link rel="preload" as="image" href={image} />
    {/each}
</svelte:head>

{#each config.images as image}
    {#if selected === image}
        <img transition:fade class="object-cover absolute w-screen h-screen" src={image} alt="" />
    {/if}
{/each}
