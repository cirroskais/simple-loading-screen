<script>
    import steam from "./steam";

    export let steamid, color;
</script>

{#await steam(steamid)}
    <div class="flex flex-col w-[4.5rem]">
        <div class="w-[4.5rem] h-[4.5rem]" />
        <p class="text-center" style="color: {color};">.</p>
    </div>
{:then { name, avatar }}
    <div class="flex flex-col w-[4.5rem]">
        <img class="w-[4.5rem] h-[4.5rem] rounded-full border-[3px]" style="border-color: {color};" src={avatar} alt="" />
        <p class="pt-0.5 text-xs font-bold text-center overflow-clip" style="color: {color};">{name}</p>
    </div>
{/await}
