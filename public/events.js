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

function SetFilesTotal(total) {
    element.dispatchEvent(
        new CustomEvent("setFilesTotal", {
            detail: {
                total,
            },
        })
    );
}

function SetFilesNeeded(needed) {
    element.dispatchEvent(
        new CustomEvent("setFilesNeeded", {
            detail: {
                needed,
            },
        })
    );
}

// GameDetails("cirro's sandbox / FASTDL WIRE PAC3 ARC9 LVS", null, "gm_construct", null, null, "sandbox", null, null, null);
