<script>
    import { fade } from "svelte/transition";
    import { images, imageDuration } from "../config.json";

    let index = Math.floor(Math.random() * images.length),
        selected = images[index];

    setInterval(function changeImage() {
        index++;
        if (index >= images.length) index = 0;
        selected = images[index];
    }, 1000 * imageDuration);
</script>

<svelte:head>
    {#each images as image}
        <link rel="preload" as="image" href={image} />
    {/each}
</svelte:head>

{#each images as image}
    {#if selected === image}
        <img transition:fade class="object-cover absolute w-screen h-screen" src={image} alt="" />
    {/if}
{/each}
