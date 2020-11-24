import puppeteer from "puppeteer";
import { tryCatch } from "./trycatch";
import { waitUntil } from "../appConfig";

export const launch = async (config) => {
    return await tryCatch(async () => {
        console.log("launching...");
        return await puppeteer.launch(config);
    }, "launch error");
};

export const newPage = async (browser) => {
    console.log("new page...");
    return await tryCatch(async () => await browser.newPage(), "newPage error");
};

export const loadURL = async (page, url) => {
    return await tryCatch(async () => {
        await page.goto(url, waitUntil);
    }, `loadURL for ${url}`);
};

// this is necessary when running headless -> TODO: might want to set up a check?
export const setUserAgent = async (page, UA) => {
    return await tryCatch(
        async () => await page.setUserAgent(UA),
        `setUserAgent error for ${UA}`
    );
};

export const click = async (page, elm) => {
    return await tryCatch(async () => {
        await page.waitForSelector(elm);
        await page.click(elm);
    }, `clicking ${elm} on page ${page.url()} `);
};
