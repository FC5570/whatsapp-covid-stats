import { parentPort } from 'node:worker_threads';
import { country } from '../config.json';
import phin from 'phin';

(async () => {
	try {
		const { body } = await phin({
			url: `https://disease.sh/v3/covid-19/countries/${country}`,
			parse: 'json'
		});

		if (parentPort) {
			parentPort.postMessage({ op: 'receivedData', data: body });
		}
	} catch (err) {
		console.log(err);

		if (parentPort) {
			parentPort.postMessage({ op: 'receivedDataError', err });
		}
	}
})();
