<script>
    import { playlist } from "../config.json";

    export let title;
    let index = Math.floor(Math.random() * playlist.length),
        selected = playlist[index],
        volume = 0.025;

    title.set(selected.title);

    function ended() {
        index++;
        if (index >= playlist.length) index = 0;
        selected = playlist[index];
        title.set(selected.title);
    }
</script>

<audio src={selected.location} bind:volume autoplay on:ended={ended}></audio>
