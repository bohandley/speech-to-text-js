/**
 * Copyright 2017 IBM All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import GeneratedConversationV1 = require('./v1-generated');
declare class ConversationV1 extends GeneratedConversationV1 {
    static VERSION_DATE_2017_05_26: string;
    static VERSION_DATE_2017_04_21: string;
    static VERSION_DATE_2017_02_03: string;
    static VERSION_DATE_2016_09_20: string;
    static VERSION_DATE_2016_07_11: string;
    constructor(options: any);
    private static removedError;
    workspaceStatus(params: any, callback: any): void;
    getIntents(params: any, callback: any): void | ReadableStream;
    updateIntent(params: any, callback: any): any;
    getExamples(params: any, callback: any): void | ReadableStream;
    updateExample(params: any, callback: any): any;
    getCounterExamples(params: any, callback: any): void | ReadableStream;
    createCounterExample(params: any, callback: any): void | ReadableStream;
    deleteCounterExample(params: any, callback: any): void | ReadableStream;
    getCounterExample(params: any, callback: any): void | ReadableStream;
    updateCounterExample(params: any, callback: any): any;
    getEntities(params: any, callback: any): void | ReadableStream;
    updateEntity(params: any, callback: any): any;
    getValues(params: any, callback: any): void | ReadableStream;
    updateValue(params: any, callback: any): any;
    getSynonyms(params: any, callback: any): void | ReadableStream;
    updateSynonym(params: any, callback: any): any;
    getLogs(params: any, callback: any): void | ReadableStream;
    createDialogNode(params: any, callback: any): void | ReadableStream;
    getDialogNodes(params: any, callback: any): void | ReadableStream;
    updateDialogNode(params: any, callback: any): any;
}
export = ConversationV1;
