import type { Message } from 'whatsapp-web.js';

export default {
	run: (message: Message) => {
		if (message.body.toLowerCase() === 'hello') {
			message.reply(
				`Hi! I'm a Whatsapp Covid Stats bot. I bring you the covid stats of the country you wish every day at 12 AM to keep you updated.\n\n*This bot is not public. You have to host a self hosted version to use it.*\n\n*Links:*\n*API*: https://disease.sh/v3/covid-19/\n*Github Repository*: https://github.com/FC5570/whatsapp-covid-stats`
			);
		}
	}
};
