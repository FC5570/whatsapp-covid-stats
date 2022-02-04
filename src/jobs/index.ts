import type Bree from 'bree';
import client from '..';
import { container } from 'tsyringe';
import { join } from 'node:path';
import { phoneNumber } from '../config.json';
import { formatNumber } from '../lib/util';
import type { CovidCasesResponse } from '../lib/types';

export function registerJobs() {
	const bree = container.resolve<Bree>('bree');

	bree.add({
		name: 'main',
		path: join(__dirname, '..', 'jobs', 'sendMessage.js'),
		timeout: 10_000
	});
}

export function startJobs() {
	const bree = container.resolve<Bree>('bree');

	bree.on('worker created', (name) => {
		bree.workers[name]?.on('message', async (message) => {
			const chat = await client.getChatById(phoneNumber);

			if (message.op === 'receivedData') {
				const data = message.data as CovidCasesResponse;
				const date = new Date();
				const updated = new Date(data.updated);

				const content = `*Covid Cases in India - ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}*\n\nActive: *${formatNumber(
					data.active
				)}*\nCritical: *${formatNumber(data.critical)}*\n\nTotal Cases: *${formatNumber(data.cases)}*\nTotal Deaths: *${formatNumber(
					data.deaths
				)}*\nTotal Recovered: *${formatNumber(data.recovered)}*\n\nCases Today: *${data.todayCases}*\nDeaths Today: *${
					data.todayDeaths
				}*\nRecovered Today: *${data.todayRecovered}*\n\n*Last Updated: ${updated.toUTCString()}*`;

				chat.sendMessage(content).catch(() => null);
			} else if (message.op === 'receivedDataError') {
				chat.sendMessage(`An error occured while trying to get today's data! ${message.data.error}`).catch(() => null);
			}
		});
	});

	bree.on('worker deleted', (name) => {
		bree.workers[name]?.removeAllListeners();
	});

	bree.start();
}
