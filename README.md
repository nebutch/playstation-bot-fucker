# playstation-bot-fucker
A bot based on Node/Puppeteer that will hit Walmart up for the goods

This project is based on the excellent [Python bot by dkkocab](https://github.com/dkkocab/WebSiteBot_PS5)

Use this to load the WalMart site and snag a PS5.

### Usage
- Be sure to be on [Node v14+](https://nodejs.dev/learn/how-to-install-nodejs). Built this using latest LTS (14.15) at the time of writing.
- Run `npm i`
- Modify the **walmartConfig.js** file with your custom information (be sure to note comments in file - they are important)
- Note the comment in the **walmartConfig.js** file - you can set up which PS5 version you want by setting the value of `endpoint` in the **index.js** file. Use `SITE.digital` (default) or `SITE.physical`.
- Run `npm run bot` to start it.

### IMPORTANT - READ BEFORE RUNNING!
- If you are sure that you are ready to actually purchase the item, uncomment this line in **index.js**: `// await clickButton(ELEMENTS.confirmOrder);`


### NOTES
- You can set a limit of how many times the bot attempts to purchase the PS5 by setting this line in **index.js**: `const limit = 20;`
- You can set a test endpoint in the **index.js** file to verify the bot works with an in-stock item: `const testEndpoint = "blah"` (default is set to a DS4 controller, but you might want to find something cheap if you want to test the full process)
- I have run into bot traps frequently using this script. I have tried to circumvent this by using a `sleep()` method between some button presses but it might not be a perfect solution.
- One issue that we might come across is that the PS5 may be added to the cart, then doesn't allow you to navigate to the cart in order to checkout. **I may need to add a contigency for this use case, so that the bot just tries to load the cart repeatedly instead of reloading the item page.**
- Note that I have also added [dkkocab's](https://github.com/dkkocab) CODE_OF_CONDUCT.md file. I expect any contributors to follow the same guidelines.

### DISCLAIMER
- Not that it matters, but this project here was Frankensteined by another bot project that I had written, so it's a little messy. Feel free to clean it up and submit a PR.

