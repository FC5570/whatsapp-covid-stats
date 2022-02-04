import qrcode from 'qrcode-terminal';
import { cyan } from 'colorette';

export default {
	run: (qr: string) => {
		console.log(`${cyan('[INFO]')} Sesion authentication failed. QR-Code generated.`);
		qrcode.generate(qr, { small: true });
		console.log(`${cyan('[INFO]')} Scan the above QR-Code with your device to login.`);
	}
};
