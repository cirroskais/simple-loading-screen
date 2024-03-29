<script>
    import { playlist } from "../config.json";

    let index = Math.floor(Math.random() * playlist.length),
        selected = playlist[index],
        volume = 0.05;

    export let title;

    title.set(selected.title);

    function ended() {
        index++;
        if (index >= playlist.length) index = 0;
        selected = playlist[index];
        title.set(selected.title);
    }
</script>

<audio src={selected.location} bind:volume autoplay on:ended={ended}></audio>
