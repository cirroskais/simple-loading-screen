import { writable } from "svelte/store";

const element = document.getElementsByTagName("html")[0];

export const gameDetails = writable();
export const downloadingFile = writable();
export const statusChanged = writable({ status: "" });
export const setFilesTotal = writable();
export const setFilesNeeded = writable();

// @ts-ignore
element.addEventListener("gameDetails", ({ detail }) => gameDetails.set(detail));
// @ts-ignore
element.addEventListener("downloadingFile", ({ detail }) => downloadingFile.set(detail));
// @ts-ignore
element.addEventListener("statusChanged", ({ detail }) => statusChanged.set(detail));
// @ts-ignore
element.addEventListener("setFilesTotal", ({ detail }) => setFilesTotal.set(detail));
// @ts-ignore
element.addEventListener("setFilesNeeded", ({ detail }) => setFilesNeeded.set(detail));
