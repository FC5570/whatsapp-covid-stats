import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { cyan, green } from 'colorette';
import type { Client } from 'whatsapp-web.js';

export function setupListeners(client: Client) {
	const listenersPath = join(__dirname, '..', 'listeners');
	const listeners = readdirSync(listenersPath);

	for (const listener of listeners.filter((file) => file.endsWith('.js'))) {
		const { default: loaded } = require(join(listenersPath, listener));
		const name = listener.replace('.js', '');

		console.log(`${cyan('[INFO]')} Loaded listener ${green(name)}`);

		client.on(name, (...args) => loaded.run(...args, client));
	}
}
