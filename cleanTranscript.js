const fs = require('fs');
const transformTranscriptToSimpleText = require('./transformTranscriptToSimpleText.js')

const myReadStream = fs.createReadStream(__dirname + '/IES46-Tim_Jastrab.mp3_transcript.txt', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/trainingText.txt');

myReadStream.on('data', (chunk)=>{
  console.log('hello');
});

myReadStream
  .pipe(transformTranscriptToSimpleText)
  .pipe(myWriteStream);

