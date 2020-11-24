import { launch, newPage, setUserAgent } from "./utils/helpers";
import { CHROME_79_USER_AGENT } from "./appConfig";
import { tryCatch } from "./utils/trycatch";

export const init = async (config) => {
    return await tryCatch(async () => {
        const browser = await launch(config);
        const page = await newPage(browser);

        await setUserAgent(page, CHROME_79_USER_AGENT);

        return [page, browser];
    }, "initialize browser set up");
};
