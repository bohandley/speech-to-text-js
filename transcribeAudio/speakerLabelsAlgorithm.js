function createSpeakerLabelHash(output){
	let hash = {};
	output.speaker_labels.map(function(speaker_label){
		if ( !hash[speaker_label.speaker] && speaker_label.confidence > 0.35) { 
			hash[speaker_label.speaker]=[speaker_label.from];
		} else if ( hash[speaker_label.speaker] ) {
			hash[speaker_label.speaker].push(speaker_label.from);
		} 
	});
	return hash;
}

function createTimestampsCollection(output) {
	let array = [];
	output.results.map(function(result){
		result.alternatives[0].timestamps.map(function(el){
			array.push(el);
		}); 
	});
	return array;
}

function joinSpeakerLabelsWithTimestamps(array, hash){
	let speaker = '';
	array.map(function(el){
		for(var key in hash) {
			if (hash.hasOwnProperty(key)) {
				if ( hash[key].includes(el[1]) && speaker != key ){
					speaker = key;
					// Capitalize the first word for each speaker
					el[0] = capitalizeFirstLetter(el[0])
					// Add the speaker label
					el[0] = 'Speaker - ' + key + ': ' + el[0];
				}
			}
		}
	});
	return array;
}

function removePeriods(text){
	text = text.replace(/\./g, "");
	return text;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function joinTranscriptStrings(array){
	let transcript = '';
	array.map(function(el){
		if ( el[0].slice(0,7) === 'Speaker') {
			transcript += '\n\n' + el[0] + ' ';
		} else {
			transcript += el[0] + ' ';
		}
	});
	transcript = removePeriods(transcript);
	return transcript;
}

module.exports = function createTranscript(output){
	let array = createTimestampsCollection(output);
	let hash = createSpeakerLabelHash(output);
	let collection = joinSpeakerLabelsWithTimestamps(array, hash);
	return joinTranscriptStrings(collection);
};