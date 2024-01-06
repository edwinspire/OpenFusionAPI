import { handler } from '../../build/handler.js';
import { ServerAPI } from '@edwinspire/libapiserver';

//

try {
	const server = new ServerAPI(true, handler);

	server.listen();

} catch (error) {
	console.trace(error);
}