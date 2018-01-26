require('dotenv').config();
const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const fs = require('fs');

const speech_to_text = new SpeechToTextV1 ({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD
});

// Add a text file of words specific to your custom language model
const params = {
	'customization_id': process.env.LANGUAGE_CUSTOMIZATION_ID,
	'corpus_name': 'IES46CleanTranscript',
	'corpus_file': fs.createReadStream(__dirname + '/trainingText.txt')
};

speech_to_text.addCorpus(params, function(error, response) {
	if (error)
		console.log('Error:', error);
	else
		console.log(JSON.stringify(response, null, 2));
});