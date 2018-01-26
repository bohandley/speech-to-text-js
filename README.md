# speech-to-text-js
Transcribe audio files in Node.js using IBM Watson Speech to Text API

Following the steps below allows you to load .ogg files into the audio folder, run the program and have transcribed .txt files deposited into the text folder.

This repository was created to transcribe audio files, adding speaker labels and timestamps. Currently, Watson's speech to text speaker labels function is in a beta mode. Speaker labels are only returned as a collection, and not returned attached to the transcribed text. This is a problem if one wants to transcribe audio with more than one speaker and have the text identify when a different speaker is speaking. 

To solve this problem, take a look in `localModules/speakerLabelsAlgorithm.js`. In this file, the JSON returned from Watson's recognizeStream is pulled apart and put back together as a string. This string is then written to the writeStream. Please email brendan.ohandley@gmail.com if you have any thoughts, advice or questions about this algorithm.  

To run the code locally follow the instructions listed below.

1. Install Node.js

2. Install Node Package Manager

3. Install Modules
    - `npm install`

4. Get IBM Watson credentials
    - Get your credentials [here](https://console.bluemix.net/docs/services/watson/getting-started-credentials.html#service-credentials-for-watson-services)

5. Create a .gitignore file and in the file write `.env`

6. Create a dotenv file
    - `touch .env`

7. Store your Watson credential information

    ```
    WATSON_USERNAME=<your-watson-username-as-a-string>
    WATSON_PASSWORD=<your-watson-password-as-a-string>
    ```


8. Place .ogg files in the 'audio' folder.
```
speech-to-text-js/audio
```

9. Run the program
```
node transcribeAudio/speechToText.js
```

11. Transcribed .txt can be found in the text directory
```
speech-to-text-js/text
```

12. Look at your lovely transcribed file with speaker labels and timestamps.
```
    00:00:01 Speaker - 0: Hello

    00:00:08 Speaker - 1: Hi there

    00:00:17 Speaker - 0: Glad you could make it 

    00:00:26 Speaker - 1: Me too
```
