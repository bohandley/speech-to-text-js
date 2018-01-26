require('dotenv').config();

const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const speech_to_text = new SpeechToTextV1 ({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD
});

const params = {
	'customization_id': process.env.ACOUSTIC_CUSTOMIZATION_ID,
	// 'audio_name': 'ies46small'
};

speech_to_text.listAudio(params, function(error, response) {
	if (error)
		console.log('Error:', error);
	else
		console.log(JSON.stringify(response, null, 2));
});