require('dotenv').config();
const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');

const speech_to_text = new SpeechToTextV1 ({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD
});

const params = {
	'customization_id': process.env.LANGUAGE_CUSTOMIZATION_ID,
};

speech_to_text.listCorpora(params, function(error, corpora) {
	if (error)
		console.log('Error:', error);
	else
		console.log(JSON.stringify(corpora, null, 2));
});