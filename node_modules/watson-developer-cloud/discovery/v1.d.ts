import GeneratedDiscoveryV1 = require('./v1-generated');
declare class DiscoveryV1 extends GeneratedDiscoveryV1 {
    static VERSION_DATE_2017_09_01: string;
    static VERSION_DATE_2017_08_01: string;
    static VERSION_DATE_2017_07_19: string;
    static VERSION_DATE_2017_06_25: string;
    static VERSION_DATE_2016_12_01: string;
    static VERSION_DATE_2017_04_27: string;
    static VERSION_DATE_2016_12_15: string;
    static _ensureFilename(file: any): any;
    getEnvironments(params: any, callback: any): void | ReadableStream;
    createEnvironment(params: any, callback: any): void | ReadableStream;
    updateEnvironment(params: any, callback: any): void | ReadableStream;
    updateConfiguration(params: any, callback: any): void | ReadableStream;
    getCollections(params: any, callback: any): void | ReadableStream;
    createCollection(params: any, callback: any): void | ReadableStream;
    updateCollection(params: any, callback: any): void | ReadableStream;
    getCollectionFields(params: any, callback: any): void | ReadableStream;
    getConfigurations(params: any, callback: any): void | ReadableStream;
    createConfiguration(params: any, callback: any): void | ReadableStream;
    addJsonDocument(params: any, callback: any): void | ReadableStream;
    updateJsonDocument(params: any, callback: any): void | ReadableStream;
    query(params: any, callback: any): void | ReadableStream;
}
export = DiscoveryV1;
