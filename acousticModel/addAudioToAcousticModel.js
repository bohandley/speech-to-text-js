require('dotenv').config();
const fs = require('fs');
const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const speech_to_text = new SpeechToTextV1 ({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD
});

const audioFile = fs.createReadStream(__dirname + '/ies46hour.ogg');
const path = __dirname + '/ies46hour.ogg';
console.log(path);

const params = {
  customization_id: process.env.ACOUSTIC_CUSTOMIZATION_ID,
  audio_name: 'IES46',
  audio_resource: audioFile,
  content_type: 'audio/ogg',
  allow_overwrite: true
};

speech_to_text.addAudio(params, function(error, response) {
  if (error)
    console.log('Error:', error);
  else
    console.log(JSON.stringify(response, null, 2));
});

