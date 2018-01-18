const Transform = require('stream').Transform;

// Take a written transcript with timestamps=>[...], speaker labels=>Joe:, and
// transform it to pure text to train watson
//  -lowercase
//  -remove timestamps
//  -remove specific speaker labels(change the names below)
//  -remove all punctuation
//  -add space where punctuation was
const transformTranscriptToSimpleText = new Transform({
  transform(chunk, encoding, callback) {
    chunk = chunk.toString()
      .toLowerCase()
      .replace(/\s*\[.*?\]\s*/g, ' ')
      .replace('tim:', ' ')
      .replace('joe:', ' ')
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()']/g,"")
      .replace(/\s{2,}/g," ");
    this.push(chunk);
    callback();
  }
});

module.exports = transformTranscriptToSimpleText;
