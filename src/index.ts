import 'reflect-metadata';

import Bree from 'bree';
import { Client } from 'whatsapp-web.js';
import { container } from 'tsyringe';
import { setupListeners } from './lib/setup';
import { getSessionConfig } from './lib/util';
import { puppeteer_headless, disable_bree_logger } from './config.json';

const bree = new Bree({
	root: false,
	logger: !disable_bree_logger
});
const client = new Client({
	puppeteer: {
		headless: puppeteer_headless ?? true
	},
	session: getSessionConfig() ?? undefined
});

client.initialize();
container.register('bree', { useValue: bree });
setupListeners(client);

export default client;
