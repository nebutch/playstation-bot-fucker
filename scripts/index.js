import { init } from "./init";
import { tryCatch } from "./utils/trycatch";
import { waitUntil, launchConfig } from "./appConfig";
import { ELEMENTS, SITE, FORM } from "./walmartConfig";

let page;
let browser;

const limit = 5;
let currentIdx = 0;

// Set to false when you are ready to play the game
const USE_TEST_ENDPOINT = true;

const checkStatus = async () => {
    [page, browser] = await init(launchConfig);

    currentIdx++;

    // Use a test endpoint to ensure bot is working,
    // and forms are completed correctly
    const testEndpoint =
        "https://www.walmart.com/ip/Sony-Playstation-4-DualShock-4-Controller-Black/28802345";

    const endpoint = USE_TEST_ENDPOINT ? testEndpoint : SITE.digital;

    try {
        await loadURL(endpoint);

        await clickButton(ELEMENTS.addToCart);
        await sleep();
        await clickButton(ELEMENTS.checkOut);
        await sleep();
        await clickButton(ELEMENTS.continueWithoutAccount);
        await sleep();

        await clickButton(ELEMENTS.firstContinue);
        await page.waitForNavigation({ waitUntil: "domcontentloaded" });

        await enterData(ELEMENTS.firstName, FORM.myFirstName);
        await enterData(ELEMENTS.lastName, FORM.myLastName);
        await enterData(ELEMENTS.phone, FORM.myPhone);
        await enterData(ELEMENTS.email, FORM.myEmail);
        await enterData(ELEMENTS.address, FORM.myAddress);
        await enterData(ELEMENTS.addressTwo, FORM.myAddressTwo);
        await enterData(ELEMENTS.postalCode, FORM.myPostalCode);

        await sleep();

        await clickButton(ELEMENTS.confirmInfo);

        // This is where you'll probably hit a bot trap
        // It's a major fucking PITA as it runs you through multiple tests
        // Just complete it, then re-run the bot. Maybe you'll get a couple more tries...?

        const pageTimeout = 90000; // Crank up the timeout to account for captcha
        await page.waitForNavigation({
            waitUntil: "domcontentloaded",
            timeout: pageTimeout,
        });

        await enterData(ELEMENTS.firstName, FORM.myFirstName);
        await enterData(ELEMENTS.lastName, FORM.myLastName);
        await enterData(ELEMENTS.creditCardNum, FORM.myCreditCardNum);
        await enterData(ELEMENTS.creditCVV, FORM.myCVV);
        await enterData(
            ELEMENTS.creditExpireYear,
            FORM.myCreditExpireYear,
            true
        );
        await enterData(
            ELEMENTS.creditExpireMonth,
            FORM.myCreditExpireMonth,
            true
        );

        await clickButton(ELEMENTS.reviewOrder);
        await page.waitForNavigation({ waitUntil: "domcontentloaded" });

        console.log("OK, READY TO CONFIRM THE ORDER NOW!");

        // UNCOMMENTING THIS WILL COMPLETE THE PURCHASE
        // SO, BE SURE YOU ARE READY!
        // await clickButton(ELEMENTS.confirmOrder);
    } catch (error) {
        console.log("It didn't work. Try again....");
        console.log(error);
        if (currentIdx <= limit) {
            checkStatus();
        } else {
            console.log("Aborting - too many attempts");
            closeBrowser();
        }
    }
};

const clickButton = async (xpath) => {
    const buttonExists = await page.waitForXPath(xpath, { timeout: 10000 });
    if (buttonExists) {
        const elements = await page.$x(xpath);
        return await elements[0].click();
    } else {
        return Promise.reject();
    }
};

const enterData = async (field, data, select = false) => {
    try {
        if (!select) {
            const fieldName = `input[name=${field}]`;
            const inputField = await page.waitFor(fieldName);
            await page.$eval(fieldName, (el, val) => (el.value = val), "");

            const input = await page.$("#inputID");
            await inputField.click({ clickCount: 3 });
            return await page.type(fieldName, data);
        } else {
            const fieldName = `select[name=${field}]`;
            return await page.select(fieldName, data);
        }
    } catch (error) {
        console.log(error);
    }
};

const loadURL = async (url) => {
    console.log("LOADING URL : ", url);
    return await tryCatch(async () => {
        await page.goto(url, waitUntil);
    }, `loadURL for ${url}`);
};

const sleep = (time = 1000) => {
    setTimeout(() => {
        return Promise.resolve();
    }, time);
};

const closeBrowser = (time = 5000) => {
    setTimeout(() => {
        browser.close();
    }, time);
};

checkStatus();
