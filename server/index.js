import OpenFusionAPI from '@edwinspire/libopenfusionapi';
import { error } from '@sveltejs/kit';

//

try {

	if (!process.env.PUBLIC_API_SERVER_HOST) {
		throw { error: 'PUBLIC_API_SERVER_HOST on .env is required' }
	}

	const server = new OpenFusionAPI();

	console.log(process.cwd());

} catch (error) {
	console.trace(error);
}