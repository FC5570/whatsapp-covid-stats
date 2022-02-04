# whatsapp-covid-stats
This is a whatsapp covid stats bot, created to send the covid stats of the country you set, every day at 12:00 AM to the phone number you set. 
If you wish to share this project, or self host it, please consider giving credits to me, they aren't required, but are appreciated.

## Setup
1. Install the dependencies, use `yarn install`.
2. Head over to src/config.json, and fill in the details, read the Configuration section below for more info.
3. Go to `src/lib` and create a folder named `sessions`, this is important as the session when you first login using the QR code is saved in a .json file in this folder, which will be used everytime you try to login afterwards.
4. Run the bot using `yarn start`.

## Configuration
1. **country**: The country you want the bot to send you the stats of. The availability of the stats depends on the API used.
2. **phoneNumber**: The phone number of the person you wish to send the stats to. The phone number must contain the country code at the start, and `@c.us` at the end. For example: `911234567890@c.us`, the country code is 91, everything after is the phone number.
3. **puppeteer_headless**: Whether to make the puppeteer instance headless. If `true`, no browser process will be launched.
4. **disable_bree_logger**: Whether to disable the logger provided by bree.

## Hosting
You need to self host this bot, as a public one is not available. You can use [Railway](https://railway.app) or [Danbot Hosting](https://discord.gg/dbh).

## Credits
Thanks to [disease.sh](https://disease.sh) for providing an API to get the covid stats, and [whatsapp-web.js](https://npmjs.com/whatsapp-web.js).

## Preview
![](https://i.imgur.com/XPomZzj.png)
![](https://i.imgur.com/89oqCmP.png)