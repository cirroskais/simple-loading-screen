const element = document.getElementsByTagName("html")[0];

function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, lang, gamemodeNice) {
    setInterval(() => {
        element.dispatchEvent(
            new CustomEvent("gameDetails", {
                detail: {
                    servername,
                    serverurl,
                    mapname,
                    maxplayers,
                    steamid,
                    gamemode,
                    volume,
                    lang,
                    gamemodeNice,
                },
            })
        );
    }, 1000);
}

function DownloadingFile(file) {
    element.dispatchEvent(
        new CustomEvent("downloadingFile", {
            detail: {
                file,
            },
        })
    );
}

function SetStatusChanged(status) {
    element.dispatchEvent(
        new CustomEvent("statusChanged", {
            detail: {
                status,
            },
        })
    );
}
