import  OpenFusionAPI  from '@edwinspire/libopenfusionapi';

//

try {
	const server = new OpenFusionAPI();

	console.log(process.cwd());

} catch (error) {
	console.trace(error);
}