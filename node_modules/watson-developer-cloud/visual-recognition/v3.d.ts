import GeneratedVisualRecognitionV3 = require('./v3-generated');
declare class VisualRecognitionV3 extends GeneratedVisualRecognitionV3 {
    static VERSION_DATE_2016_05_20: string;
    constructor(options: any);
    private static betaError;
    recognizeText(params: any, callback: any): void;
    createCollection(params: any, callback: any): void;
    getCollection(params: any, callback: any): void;
    listCollections(params: any, callback: any): void;
    deleteCollection(params: any, callback: any): void;
    addImage(params: any, callback: any): void;
    listImages(params: any, callback: any): void;
    getImage(params: any, callback: any): void;
    deleteImage(params: any, callback: any): void;
    setImageData(params: any, callback: any): void;
    getImageData(params: any, callback: any): void;
    deleteImageData(params: any, callback: any): void;
    findSimilar(params: any, callback: any): void;
    private parseParameters(params);
    classify(params: any, callback: any): void | ReadableStream;
    detectFaces(params: any, callback: any): void | ReadableStream;
    retrainClassifier(params: any, callback: any): void | ReadableStream;
}
export = VisualRecognitionV3;
