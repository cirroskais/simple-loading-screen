<script>
    import steam from "./steam";

    export let steamid, color;
</script>

{#await steam(steamid)}
    <div class="flex flex-col w-20">
        <div class="w-20 h-20" />
        <p class="text-center" style="color: {color};">.</p>
    </div>
{:then { name, avatar }}
    <div class="flex flex-col w-20">
        <img class="w-20 h-20 rounded-full border-[3px]" style="border-color: {color};" src={avatar} alt="" />
        <p class="text-sm font-bold text-center overflow-clip" style="color: {color};">{name}</p>
    </div>
{/await}
