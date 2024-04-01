<script>
    import { radio, radioServerName } from "../config.json";

    export let title;
    let listenUrl,
        volume = 0.05;

    setInterval(async () => {
        const response = await fetch(radio + "/status-json.xsl");
        const body = await response.json();

        const data = body.source?.length
            ? body.icestats.source?.find((s) => {
                  return s.server_name === radioServerName;
              })
            : body.icestats.source;

        title.set(`${data.artist} - ${data.title}`);
    }, 1000 * 5);

    async function main() {
        const response = await fetch(radio + "/status-json.xsl");
        const body = await response.json();

        const data = body.source?.length
            ? body.icestats.source?.find((s) => {
                  return s.server_name === radioServerName;
              })
            : body.icestats.source;

        listenUrl = data.listenurl;
        title.set(`${data.artist} - ${data.title}`);
    }

    main();
</script>

<audio src={listenUrl} bind:volume autoplay></audio>
