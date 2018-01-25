require('dotenv').config();
const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');

const speech_to_text = new SpeechToTextV1 ({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD
});

// Choose the acoustic model number and audio_name of the file
// to delete from the acoustic model
const params = {
  'customization_id': process.env.ACOUSTIC_CUSTOMIZATION_ID,
  'audio_name': // Choose the audio name(You can get a name from listAudioForAcousticModel.js)
};

speech_to_text.deleteAudio(params, function(error, response) {
  if (error)
    console.log('Error:', error);
  else
    console.log(JSON.stringify(response, null, 2));
});