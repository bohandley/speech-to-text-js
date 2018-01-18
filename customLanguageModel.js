require('dotenv').config();
var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var speech_to_text = new SpeechToTextV1 ({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD
});

// Create the name of your custom language model, 
// choose a base model for the custom model,
// describe it and identify the content type.
var params = {
  name: 'investorEmpowermentSeries',
  'base_model_name': 'en-US_BroadbandModel',
  description: 'Model based on a human transcript of IES46',
  'content_type': 'application/json'
};

// Copy the customization_id as it is logged and add it to your .env file
speech_to_text.createLanguageModel(params, function(error, customization) {
  if (error)
    console.log('Error:', error);
  else
    console.log(JSON.stringify(customization, null, 2));
});