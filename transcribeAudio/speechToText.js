require('dotenv').config();
const fs = require('fs');
const CircularJSON = require('circular-json');
const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');

const dirLooper = require('../localModules/dirLooper');
const isCircular = require('../localModules/isCircular');
const speakerLabelsAlgorithm = require('../localModules/speakerLabelsAlgorithm');

// Get the path of the audio directory that contains the ogg files
let directory = 'audio';
let dirPath =  __dirname.substr(0, __dirname.length - 15) + directory;

dirLooper.filewalker(dirPath, function(err, data){
	if(err){
		throw err;
	}
    
	// Loop through all the audio files in the speech-to-text-js/audio directory
	data.map(function(file){

		// Prepping the audio file
		// get the path to the audio file
		let audioPath = dirPath + '/' + file;
		// Create readableStream from file
		let audioStream = fs.createReadStream(audioPath);

		// Prepping Watson Speech to Text Service  
		// Pass credentials to watson to instantiate a speechToText object
		const speechToText = new SpeechToTextV1 ({
			username: process.env.WATSON_USERNAME,
			password: process.env.WATSON_PASSWORD
		});
		// Pass options to the recognizeStream
		// Notice, we have added the option, 'objectMode': true,  
		// and by adding this, the recognizeStream returns JSON
		const params = {
			model: 'en-US_BroadbandModel',
			acoustic_customization_id: process.env.ACOUSTIC_CUSTOMIZATION_ID,
			customization_id: process.env.LANGUAGE_CUSTOMIZATION_ID, 
			content_type: 'audio/ogg',
			timestamps: true,
			smart_formatting: true,
			speaker_labels: true,
			'objectMode': true,
			continuous: true

			// inactivity_timeout: -1
		};
		// Create recognizeStream with params
		let recognizeStream = speechToText.createRecognizeStream(params);

		// Prepping for the writableStream
		// change the file type from audio to text
		let textFile = dirLooper.createTextFile(file);
		// change the path so that files are written to speech-to-text-js/text/ direcetory
		let textPath =  __dirname.substr(0, __dirname.length - 15) + 'text/' + textFile;
		// create a write stream from the textPath
		let writableStream = fs.createWriteStream(textPath);

		// Let the transcription begin!
		// Pipe the readStream to the recognizeStream
		audioStream
			.pipe(recognizeStream);

		// Listen for the 'data' event from the recognizeStream
		recognizeStream.on('data', (chunk)=>{
			// Print the JSON to the console
			if ( isCircular(chunk) ) {
				console.log(CircularJSON.stringify(chunk));
			} else {
				console.log(JSON.stringify(chunk));
			}
			// Pass JSON to function that returns a trascript with speaker labels in a string
			let output = speakerLabelsAlgorithm(chunk);
			// Write the transcript to the writeStream object
			writableStream.write(output);
		});

		// Event handlers
		recognizeStream.on('close', (event)=>{
			onEvent('Close: ', event);
		});
			
		recognizeStream.on('error', (event)=>{
			onEvent('Error: ', event);
		});
			
		audioStream.on('data', (event)=>{
			onEvent('Streaming Audio Data: ', event);
		});
			
		audioStream.on('error', (event)=>{
			onEvent('Audio Stream Error: ', event);
		});
			
		audioStream.on('close', (event)=>{
			onEvent('Audio Stream Close: ', event);
		});

		// Displays events on the console.
		function onEvent(name, event) {
			if ( isCircular(event) ) {
				console.log(name, CircularJSON.stringify(event, null, 2));
			} else {
				  console.log(name, JSON.stringify(event, null, 2));
			}
		}

	});

});
