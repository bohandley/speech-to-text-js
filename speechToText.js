require('dotenv').config();
const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const fs = require('fs');
const CircularJSON = require('circular-json');
const request = require('request');

const speakerLabelsAlgorithm = require('../localModules/speakerLabelsAlgorithm');
const dirLooper = require('../localModules/dirLooper');
const isCircular = require('../localModules/isCircular');

// Get the path of the audio directory that contains the ogg files
let directory = 'audio'
let dirPath =  __dirname.substr(0, __dirname.length - 11) 
// + directory;
console.log(dirPath)
      

dirLooper.filewalker(dirPath, function(err, data){
    if(err){
        throw err;
    }
    
    // ["c://some-existent-path/file.txt","c:/some-existent-path/subfolder"]
    // data is an array of files
    // loop through the files
    // create writeStream txt files for each
    console.log(data);
    
    data.map(function(file){
      let textFile = dirLooper.createTextFile(file);
      console.log(textFile);
      let textPath =  __dirname.substr(0, __dirname.length - 15) + "text/" + textFile;
      console.log(textPath);
      let audioPath = dirPath + '/' + file;
    	console.log(audioPath);
      // // Pass credentials to watson to instantiate a speechToText object
      const speechToText = new SpeechToTextV1 ({
        username: process.env.WATSON_USERNAME,
        password: process.env.WATSON_PASSWORD
      });

      // Pass options to the recognizeStream
      // Notice, we have added the option, 'objectMode': true  
      // By adding this, the recognizeStream returns JSON
      const params = {
        model: 'en-US_BroadbandModel',
        acoustic_customization_id: process.env.ACOUSTIC_CUSTOMIZATION_ID,
        customization_id: process.env.LANGUAGE_CUSTOMIZATION_ID, 
        content_type: 'audio/ogg',
        timestamps: true,
        smart_formatting: true,
        speaker_labels: true,
        'objectMode': true,
        continuous: true,
        inactivity_timeout: -1
      };

      // Create recognizeStream with params
      let recognizeStream = speechToText.createRecognizeStream(params);
      // create a write stream from the textPath
      let writableStream = fs.createWriteStream(textPath);

      // Create readStream from file
			let audioStream = fs.createReadStream(audioPath);

			// Pipe the readStream to the recognizeStream
			audioStream
				.pipe(recognizeStream);

			// Listen for the 'data' event from the recognizeStream
			recognizeStream.on('data', (chunk)=>{
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

			recognizeStream.on('close', (event)=>{
				onEvent('Close: ', event);
			});
			
			// Listen for the 'error' event
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

// // Pass credentials to watson to instantiate a speechToText object
// const speechToText = new SpeechToTextV1 ({
// 	username: process.env.WATSON_USERNAME,
// 	password: process.env.WATSON_PASSWORD
// });

// // Pass options to the recognizeStream
// // Notice, we have added the option, 'objectMode': true  
// // By adding this, the recognizeStream returns JSON
// const params = {
// 	model: 'en-US_BroadbandModel',
// 	acoustic_customization_id: process.env.ACOUSTIC_CUSTOMIZATION_ID,
// 	customization_id: process.env.LANGUAGE_CUSTOMIZATION_ID, 
// 	content_type: 'audio/ogg',
// 	timestamps: true,
// 	smart_formatting: true,
// 	speaker_labels: true,
// 	'objectMode': true,
// 	continuous: true
// };

// // Create readStream from file
// const audioStream = fs.createReadStream('./IES46-Tim_Jastrab.ogg');

// // Create stream from URL
// // var file = request('http://your-favorite-podcast.com');

// // Create recognizeStream with params
// const recognizeStream = speechToText.createRecognizeStream(params);

// // Create a writeStream to transcribe text to a file
// const writableStream = fs.createWriteStream('IES46TimJastrab.txt');

// // Pipe the readStream to the recognizeStream
// audioStream
// 	.pipe(recognizeStream);

// // Listen for the 'data' event from the recognizeStream
// recognizeStream.on('data', (chunk)=>{
// 	// Display information about the data returned from the recognizeStream 
// 	console.log('Chunk is a ' + typeof(chunk));
// 	// Print the JSON to the console
// 	console.log(JSON.stringify(chunk));
// 	// Pass JSON to function that returns a trascript with speaker labels in a string
// 	let output = speakerLabelsAlgorithm(chunk);
// 	// Display the transcript
// 	console.log(output);
// 	// Write the transcript to the writeStream object
// 	writableStream.write(output);
// });

// Listen for the 'close' event on the recognizeStream
// recognizeStream.on('close', (event)=>{
// 	onEvent('Close: ', event);
// });

// // Listen for the 'error' event
// recognizeStream.on('error', (event)=>{
// 	onEvent('Error: ', event);
// });

// audioStream.on('data', (event)=>{
// 	onEvent('Streaming Audio Data: ', event);
// });

// audioStream.on('error', (event)=>{
// 	onEvent('Audio Stream Error: ', event);
// });

// audioStream.on('close', (event)=>{
// 	onEvent('Audio Stream Close: ', event);
// });
// // Displays events on the console.
// function onEvent(name, event) {
// 	console.log(name, JSON.stringify(event, null, 2));
// }
