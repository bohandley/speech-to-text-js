import GeneratedTextToSpeechV1 = require('./v1-generated');
declare class TextToSpeechV1 extends GeneratedTextToSpeechV1 {
    constructor(options: any);
    getCustomizations(params: any, callback: any): void | ReadableStream;
    getCustomization(params: any, callback: any): void | ReadableStream;
    updateCustomization(params: any, callback: any): void | ReadableStream;
    deleteCustomization(params: any, callback: any): void | ReadableStream;
    createCustomization(params: any, callback: any): void | ReadableStream;
    getWords(params: any, callback: any): void | ReadableStream;
    voices(params: any, callback: any): void | ReadableStream;
    voice(params: any, callback: any): void | ReadableStream;
    pronunciation(params: any, callback: any): void | ReadableStream;
    /**
     * Repair the WAV header of an audio/wav file.
     *
     * @param {Buffer} wavFileData - Wave audio - will be edited in place and returned
     * @return {Buffer} wavFileData - the original Buffer, with a correct header
     */
    repairWavHeader: (wavFileData: any) => any;
}
export = TextToSpeechV1;
