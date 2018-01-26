require('dotenv').config();
const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const speech_to_text = new SpeechToTextV1 ({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD
});

const params = {
	name: 'investorEmpowermentSeriesAcousticModel',
	'base_model_name': 'en-US_BroadbandModel',
	description: 'Model based on an ogg file of IES46',
	'content_type': 'application/json'
};

speech_to_text.createAcousticModel(params, function(error, customization) {
	console.log('hello');
	if (error)
		console.log('Error:', error);
	else
		console.log(JSON.stringify(customization, null, 2));
});