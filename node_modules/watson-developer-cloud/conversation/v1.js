"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GeneratedConversationV1 = require("./v1-generated");
var extend = require("extend");
var helper_1 = require("../lib/helper");
var ConversationV1 = /** @class */ (function (_super) {
    __extends(ConversationV1, _super);
    function ConversationV1(options) {
        return _super.call(this, options) || this;
    }
    ConversationV1.prototype.workspaceStatus = function (params, callback) {
        console.warn(ConversationV1.removedError);
    };
    ConversationV1.prototype.getIntents = function (params, callback) {
        return _super.prototype.listIntents.call(this, params, callback);
    };
    ConversationV1.prototype.updateIntent = function (params, callback) {
        if (params &&
            (params.new_intent ||
                params.new_description ||
                params.new_examples ||
                (params.intent && !params.old_intent))) {
            return _super.prototype.updateIntent.call(this, params, callback);
        }
        var requiredParams = ['workspace_id', 'old_intent', 'intent'];
        var missingParams = helper_1.getMissingParams(params, requiredParams);
        if (missingParams)
            return callback(missingParams);
        var _params = {
            workspace_id: params.workspace_id,
            intent: params.old_intent,
            new_intent: params.intent,
            new_description: params.description,
            new_examples: params.examples
        };
        return _super.prototype.updateIntent.call(this, _params, callback);
    };
    ConversationV1.prototype.getExamples = function (params, callback) {
        return _super.prototype.listExamples.call(this, params, callback);
    };
    ConversationV1.prototype.updateExample = function (params, callback) {
        if (params && (params.new_text || (params.text && !params.old_text))) {
            return _super.prototype.updateExample.call(this, params, callback);
        }
        var requiredParams = ['workspace_id', 'intent', 'old_text', 'text'];
        var missingParams = helper_1.getMissingParams(params, requiredParams);
        if (missingParams)
            return callback(missingParams);
        var _params = {
            workspace_id: params.workspace_id,
            intent: params.intent,
            text: params.old_text,
            new_text: params.text
        };
        return _super.prototype.updateExample.call(this, _params, callback);
    };
    ConversationV1.prototype.getCounterExamples = function (params, callback) {
        return _super.prototype.listCounterexamples.call(this, params, callback);
    };
    ConversationV1.prototype.createCounterExample = function (params, callback) {
        return _super.prototype.createCounterexample.call(this, params, callback);
    };
    ConversationV1.prototype.deleteCounterExample = function (params, callback) {
        return _super.prototype.deleteCounterexample.call(this, params, callback);
    };
    ConversationV1.prototype.getCounterExample = function (params, callback) {
        return _super.prototype.getCounterexample.call(this, params, callback);
    };
    ConversationV1.prototype.updateCounterExample = function (params, callback) {
        if (params && (params.new_text || (params.text && !params.old_text))) {
            return _super.prototype.updateCounterexample.call(this, params, callback);
        }
        var requiredParams = ['workspace_id', 'old_text', 'text'];
        var missingParams = helper_1.getMissingParams(params, requiredParams);
        if (missingParams)
            return callback(missingParams);
        var _params = {
            workspace_id: params.workspace_id,
            text: params.old_text,
            new_text: params.text
        };
        return _super.prototype.updateCounterexample.call(this, _params, callback);
    };
    ConversationV1.prototype.getEntities = function (params, callback) {
        return _super.prototype.listEntities.call(this, params, callback);
    };
    ConversationV1.prototype.updateEntity = function (params, callback) {
        if (params &&
            (params.new_entity ||
                params.new_description ||
                params.new_metadata ||
                params.new_fuzzy_match ||
                params.new_values ||
                (params.entity && !params.old_entity))) {
            return _super.prototype.updateEntity.call(this, params, callback);
        }
        var requiredParams = ['workspace_id', 'old_entity', 'entity'];
        var missingParams = helper_1.getMissingParams(params, requiredParams);
        if (missingParams)
            return callback(missingParams);
        var _params = {
            workspace_id: params.workspace_id,
            entity: params.old_entity,
            new_entity: params.entity,
            new_description: params.description,
            new_metadata: params.metadata,
            new_fuzzy_match: params.fuzzy_match,
            new_values: params.values
        };
        return _super.prototype.updateEntity.call(this, _params, callback);
    };
    ConversationV1.prototype.getValues = function (params, callback) {
        return _super.prototype.listValues.call(this, params, callback);
    };
    ConversationV1.prototype.updateValue = function (params, callback) {
        if (params &&
            (params.new_value ||
                params.new_metadata ||
                params.new_type ||
                params.new_synonyms ||
                params.new_patterns ||
                (params.value && !params.old_value))) {
            return _super.prototype.updateValue.call(this, params, callback);
        }
        var requiredParams = ['workspace_id', 'entity', 'old_value', 'value'];
        var missingParams = helper_1.getMissingParams(params, requiredParams);
        if (missingParams)
            return callback(missingParams);
        var _params = {
            workspace_id: params.workspace_id,
            entity: params.entity,
            value: params.old_value,
            new_value: params.value,
            new_metadata: params.metadata,
            new_type: params.type,
            new_synonyms: params.synonyms,
            new_patterns: params.patterns
        };
        return _super.prototype.updateValue.call(this, _params, callback);
    };
    ConversationV1.prototype.getSynonyms = function (params, callback) {
        return _super.prototype.listSynonyms.call(this, params, callback);
    };
    ConversationV1.prototype.updateSynonym = function (params, callback) {
        if (params && (params.new_synonym || !params.old_synonym)) {
            return _super.prototype.updateSynonym.call(this, params, callback);
        }
        var requiredParams = [
            'workspace_id',
            'entity',
            'value',
            'old_synonym',
            'synonym'
        ];
        var missingParams = helper_1.getMissingParams(params, requiredParams);
        if (missingParams)
            return callback(missingParams);
        var _params = {
            workspace_id: params.workspace_id,
            entity: params.entity,
            value: params.value,
            synonym: params.old_synonym,
            new_synonym: params.synonym
        };
        return _super.prototype.updateSynonym.call(this, _params, callback);
    };
    ConversationV1.prototype.getLogs = function (params, callback) {
        return _super.prototype.listLogs.call(this, params, callback);
    };
    ConversationV1.prototype.createDialogNode = function (params, callback) {
        var _params = extend({}, params);
        if (params && params.type && !_params.node_type) {
            _params.node_type = params.type;
        }
        return _super.prototype.createDialogNode.call(this, _params, callback);
    };
    ConversationV1.prototype.getDialogNodes = function (params, callback) {
        return _super.prototype.listDialogNodes.call(this, params, callback);
    };
    ConversationV1.prototype.updateDialogNode = function (params, callback) {
        if (params &&
            (params.new_dialog_node ||
                params.new_description ||
                params.new_conditions ||
                params.new_parent ||
                params.new_previous_sibling ||
                params.new_output ||
                params.new_context ||
                params.new_metadata ||
                params.new_next_step ||
                params.new_title ||
                params.new_type ||
                params.new_event_name ||
                params.new_variable ||
                params.new_actions ||
                (params.dialog_node && !params.old_dialog_node))) {
            return _super.prototype.updateDialogNode.call(this, params, callback);
        }
        var requiredParams = ['workspace_id', 'old_dialog_node', 'dialog_node'];
        var missingParams = helper_1.getMissingParams(params, requiredParams);
        if (missingParams)
            return callback(missingParams);
        var _params = {
            workspace_id: params.workspace_id,
            dialog_node: params.old_dialog_node,
            new_dialog_node: params.dialog_node,
            new_description: params.description,
            new_conditions: params.conditions,
            new_parent: params.parent,
            new_previous_sibling: params.previous_sibling,
            new_output: params.output,
            new_context: params.context,
            new_metadata: params.metadata,
            new_next_step: params.next_step,
            new_title: params.title,
            new_type: params.type,
            new_event_name: params.event_name,
            new_variable: params.variable,
            new_actions: params.actions
        };
        return _super.prototype.updateDialogNode.call(this, _params, callback);
    };
    ConversationV1.VERSION_DATE_2017_05_26 = '2017-05-26';
    ConversationV1.VERSION_DATE_2017_04_21 = '2017-04-21';
    ConversationV1.VERSION_DATE_2017_02_03 = '2017-02-03';
    ConversationV1.VERSION_DATE_2016_09_20 = '2016-09-20';
    ConversationV1.VERSION_DATE_2016_07_11 = '2016-07-11';
    ConversationV1.removedError = new Error('This endpoint has been deprecated.');
    return ConversationV1;
}(GeneratedConversationV1));
module.exports = ConversationV1;
//# sourceMappingURL=v1.js.map