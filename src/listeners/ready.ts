import { cyan } from 'colorette';
import { registerJobs, startJobs } from '../jobs';

export default {
	run: () => {
		console.log(`${cyan('[INFO]')} Client is ready.`);

		registerJobs();
		console.log(`${cyan('[INFO]')} Registered jobs.`);
		startJobs();
		console.log(`${cyan('[INFO]')} Started jobs.`);
	}
};
