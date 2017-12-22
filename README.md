# speech-to-text-js
Transcribe audio files in Node.js using IBM Watson Speech to Text API

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

7. Store your credential information

    ```
    WATSON_USERNAME=<your-watson-username-as-a-string>
    WATSON_PASSWORD=<your-watson-password-as-a-string>
    ```

