const fs = require('fs');
const transformTranscriptToSimpleText = require('../localModules/transformTranscriptToSimpleText.js')

const myReadStream = fs.createReadStream(__dirname + '/IES46-Tim_Jastrab.mp3_transcript.txt', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/trainingText.txt');

myReadStream
  .pipe(transformTranscriptToSimpleText)
  .pipe(myWriteStream);

// Event listeners for myReadStream
myReadStream.on('data', ()=>{
  console.log('Data transmitting...');
});

myReadStream.on('end', ()=>{
  console.log('Data complete.');
});

myReadStream.on('error', (event)=>{
  onEvent('Data error: ',  event);
});

function onEvent(name, event) {
  console.log(name, JSON.stringify(event, null, 2));
}

