import { existsSync } from 'node:fs';
import { join } from 'node:path';
import type { ClientAuthenticatedPayload } from './types';

export function getSessionConfig() {
	const sessionPath = join(__dirname, '..', '..', 'src', 'lib', 'sessions', 'session.json');
	if (existsSync(sessionPath)) {
		const session = require(sessionPath);
		return session as ClientAuthenticatedPayload;
	}

	return null;
}

export function formatNumber(number: string | number) {
	return Number.parseFloat(number.toString()).toLocaleString(undefined);
}
