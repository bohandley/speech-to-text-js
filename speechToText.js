require('dotenv').config();
const speakerLabelsAlgorithm = require('./speakerLabelsAlgorithm');
const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const fs = require('fs');
const request = require('request');


// Pass credentials to watson to instantiate a speechToText object
const speechToText = new SpeechToTextV1 ({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD
});

// Pass options to the recognizeStream
// Notice, we have added the option, 'objectMode': true  
// By adding this, the recognizeStream returns JSON
const params = {
	model: 'en-US_BroadbandModel',
	content_type: 'audio/ogg',
	timestamps: true,
	smart_formatting: true,
	speaker_labels: true,
	'objectMode': true,
	continuous: true
};

// Create readStream from file
const audioStream = fs.createReadStream(__dirname + '/<your-audio-file-here.ogg');

// Create stream from URL
// var file = request('http://traffic.libsyn.com/investorempowermentradio/IES46-Tim_Jastrab.mp3')

// Create recognizeStream with params
const recognizeStream = speechToText.createRecognizeStream(params);

// Create a writeStream to transcribe text to a file
const writableStream = fs.createWriteStream('<your-file-to-write-to.txt>');

// Pipe the readStream to the recognizeStream
audioStream
	.pipe(recognizeStream);

// Listen for the 'data' event from the recognizeStream
recognizeStream.on('data', function(chunk){
	// Display information about the data returned from the recognizeStream 
	console.log('Chunk is a ' + typeof(chunk));
	// Print the JSON to the console
	console.log(JSON.stringify(chunk));
	// Pass JSON to function that returns a trascript with speaker labels in a string
	let output = speakerLabelsAlgorithm(chunk);
	// Display the transcript
	console.log(output);
	// Write the transcript to the writeStream object
	writableStream.write(output);
});

// Listen for the 'close' event on the recognizeStream
recognizeStream.on('close', function(event){
	onEvent('Close: ', event);
});

// Listen for the 'error' event
recognizeStream.on('error', function(event){
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
	console.log(name, JSON.stringify(event, null, 2));
}