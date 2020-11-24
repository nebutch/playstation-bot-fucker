require("dotenv").config();

// the "waitUntil: networkidel" ensures the page is loaded fully by waiting until there are no more network requests for at least 500ms
export const waitUntil = { waitUntil: "networkidle0" };

export const CHROME_79_USER_AGENT = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36`;

export const launchConfig = {
    headless: false,
    devtools: true,
    defaultViewport: null,
    args: ["--window-size=1920,1170", "--window-position=0,0"],
};
