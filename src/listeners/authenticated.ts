import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { cyan, green } from 'colorette';
import type { ClientAuthenticatedPayload } from '../lib/types';

export default {
	run: async (payload: ClientAuthenticatedPayload) => {
		console.log(`${cyan(`[INFO]`)} Recieved authentication payload... Writing to file.`);

		await writeFile(join(__dirname, '..', '..', 'src', 'lib', 'sessions', 'session.json'), JSON.stringify(payload));
		console.log(`${green('[SUCCESS]')} Created session file`);
	}
};
