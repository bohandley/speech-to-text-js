# speech-to-text-js
Transcribe audio files in Node.js using IBM Watson Speech to Text API

This repository was created to transcribe audio files and add speaker labels. Currently, Watson's speech to text speaker labels function is in a beta mode. Speaker labels are only returned as a collection, and not returned attached to the transcribed text. This is a problem if one wants to transcribe audio with more than one speaker and have the text identify when a different speaker is speaking. 

To solve this problem, take a look in `speakerLabelsAlgorithm.js`. In this file, the JSON returned from Watson's recognizeStream is pulled apart and put back together as a string. This string is then written to the writeStream. Please email brendan.ohandley@gmail.com if you have any thoughts, advice or questions about this algorithm.  

To run the code locally follow the instructions listed below.

1. Install Node.js

2. Install Node Package Manager

3. Install Modules
    - watson-developer-cloud module
    - `npm install watson-developer-cloud --save`
    - dotenv module
    - `npm install dotenv --save`

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


8. Identify which file you would like to transcribe

    ```
    // Create readStream from file
    const audioStream = fs.createReadStream(__dirname + '/<your-audio-file-here.ogg');
    ```

9. Identify the name of the transcribed text file

    ```
    // Create a writeStream to transcribe text to a file
    const writableStream = fs.createWriteStream('<your-file-to-write-to.txt>');
    ```

10. Run the program

    ```
    node speechTotext.js
    ```

11. Check out your results

    ```
    Speaker - 0: hello

    Speaker - 1: hi there

    Speaker - 0: glad you could make it 

    Speaker - 1: me too
    ```
