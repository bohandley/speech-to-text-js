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
var extend = require("extend");
var requestwrapper_1 = require("../lib/requestwrapper");
var helper_1 = require("../lib/helper");
var base_service_1 = require("../lib/base_service");
/**
 * **Important:** As of September 8, 2017, the beta period for Similarity Search is closed. For more information, see [Visual Recognition API – Similarity Search Update](https://www.ibm.com/blogs/bluemix/2017/08/visual-recognition-api-similarity-search-update).  The IBM Watson Visual Recognition service uses deep learning algorithms to identify scenes, objects, and faces  in images you upload to the service. You can create and train a custom classifier to identify subjects that suit your needs.   **Tip:** To test calls to the **Custom classifiers** methods with the API explorer, provide your `api_key` from your IBM&reg; Cloud service instance.
 */
var VisualRecognitionV3 = /** @class */ (function (_super) {
    __extends(VisualRecognitionV3, _super);
    /**
     * Construct a VisualRecognitionV3 object.
     *
     * @param {Object} options - Options for the service.
     * @param {String} options.version_date - The API version date to use with the service, in "YYYY-MM-DD" format. Whenever the API is changed in a backwards incompatible way, a new minor version of the API is released. The service uses the API version for the date you specify, or the most recent version before that date. Note that you should not programmatically specify the current date at runtime, in case the API has been updated since your application's release. Instead, specify a version date that is compatible with your application, and don't change it until your application is ready for a later version.
     * @param {String} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/visual-recognition/api'). The base url may differ between Bluemix regions.
     * @param {String} [options.api_key] - The API key used to authenticate with the service. The API key credential is only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
     * @param {Boolean} [options.use_unauthenticated] - Set to `true` to avoid including an authorization header. This option may be useful for requests that are proxied.
     * @param {Object} [options.headers] - Default headers that shall be included with every request to the service.
     * @param {Object} [options.headers.X-Watson-Learning-Opt-Out] - Set to `true` to opt-out of data collection. By default, all IBM Watson services log requests and their results. Logging is done only to improve the services for future users. The logged data is not shared or made public. If you are concerned with protecting the privacy of users' personal information or otherwise do not want your requests to be logged, you can opt out of logging.
     * @constructor
     * @returns {VisualRecognitionV3}
     * @throws {Error}
     */
    function VisualRecognitionV3(options) {
        var _this = _super.call(this, options) || this;
        // check if 'version_date' was provided
        if (typeof _this._options.version_date === 'undefined') {
            throw new Error('Argument error: version_date was not specified');
        }
        _this._options.qs.version = options.version_date;
        return _this;
    }
    /*************************
     * classify
     ************************/
    /**
     * Classify images.
     *
     * Classify images with the built-in classes. You can analyze images against the built-in classifiers or against an array of classifier IDs. To identify custom classifiers, include the **classifier_ids** or **owners** parameters.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {ReadableStream|FileObject|Buffer} [params.images_file] - An image file (.jpg, .png) or .zip file with images. Include no more than 20 images and limit the .zip file to 5 MB. You can also include images with the `url` property in the **parameters** object.
     * @param {string} [params.parameters] - Specifies input parameters. The parameter can include these inputs in a JSON object:  - url: A string with the image URL to analyze. You can also include images in the **images_file** parameter. - classifier_ids: An array of classifier IDs to classify the images against. - owners: An array with the values IBM, me, or both to specify which classifiers to run. - threshold: A floating point value that specifies the minimum score a class must have to be displayed in the response.  For example: {"url": "...", "classifier_ids": ["...","..."], "owners": ["IBM", "me"], "threshold": 0.4}.
     * @param {string} [params.accept_language] - Specifies the language of the output class names.  Can be `en` (English), `ar` (Arabic), `de` (German), `es` (Spanish), `it` (Italian), `ja` (Japanese), or `ko` (Korean).  Classes for which no translation is available are omitted.  The response might not be in the specified language under these conditions: - English is returned when the requested language is not supported. - Classes are not returned when there is no translation for them. - Custom classifiers returned with this method return tags in the language of the custom classifier.
     * @param {string} [params.images_file_content_type] - The content type of images_file.
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {ReadableStream|void}
     */
    VisualRecognitionV3.prototype.classify = function (params, callback) {
        var _params = typeof params === 'function' && !callback ? {} : extend({}, params);
        var _callback = typeof params === 'function' && !callback
            ? params
            : callback ? callback : function () { };
        var formData = {
            images_file: {
                data: _params.images_file,
                contentType: _params.images_file_content_type
            },
            parameters: _params.parameters
        };
        var parameters = {
            options: {
                url: '/v3/classify',
                method: 'POST',
                formData: formData
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Accept-Language': _params.accept_language
                }
            })
        };
        return requestwrapper_1.createRequest(parameters, _callback);
    };
    /**
     * Detect faces in images.
     *
     * Analyze and get data about faces in images. Responses can include estimated age and gender, and the service can identify celebrities. This feature uses a built-in classifier, so you do not train it on custom classifiers. The Detect faces method does not support general biometric facial recognition.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {ReadableStream|FileObject|Buffer} [params.images_file] - An image file (.jpg, .png) or .zip file with images. Include no more than 15 images. You can also include images with the `url` property in the **parameters** object.  All faces are detected, but if there are more than 10 faces in an image, age and gender confidence scores might return scores of 0.
     * @param {string} [params.parameters] - A JSON string containing the image URL to analyze.   For example: {"url": "..."}.
     * @param {string} [params.images_file_content_type] - The content type of images_file.
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {ReadableStream|void}
     */
    VisualRecognitionV3.prototype.detectFaces = function (params, callback) {
        var _params = typeof params === 'function' && !callback ? {} : extend({}, params);
        var _callback = typeof params === 'function' && !callback
            ? params
            : callback ? callback : function () { };
        var formData = {
            images_file: {
                data: _params.images_file,
                contentType: _params.images_file_content_type
            },
            parameters: _params.parameters
        };
        var parameters = {
            options: {
                url: '/v3/detect_faces',
                method: 'POST',
                formData: formData
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data'
                }
            })
        };
        return requestwrapper_1.createRequest(parameters, _callback);
    };
    /*************************
     * customClassifiers
     ************************/
    /**
     * Create a classifier.
     *
     * Train a new multi-faceted classifier on the uploaded image data. Create your custom classifier with positive or negative examples. Include at least two sets of examples, either two positive example files or one positive and one negative file. You can upload a maximum of 256 MB per call.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.name - The name of the new classifier. Cannot contain special characters.
     * @param {ReadableStream|FileObject|Buffer} params.classname_positive_examples - A .zip file of images that depict the visual subject of a class in the new classifier. You can include more than one positive example file in a call. Append `_positive_examples` to the form name. The prefix is used as the class name. For example, `goldenretriever_positive_examples` creates the class **goldenretriever**.  Include at least 10 images in .jpg or .png format. The minimum recommended image resolution is 32X32 pixels. The maximum number of images is 10,000 images or 100 MB per .zip file.  The API explorer limits you to training only one class. To train more classes, use the API functionality.
     * @param {ReadableStream|FileObject|Buffer} [params.negative_examples] - A compressed (.zip) file of images that do not depict the visual subject of any of the classes of the new classifier. Must contain a minimum of 10 images.
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {ReadableStream|void}
     */
    VisualRecognitionV3.prototype.createClassifier = function (params, callback) {
        var _params = extend({}, params);
        var _callback = callback ? callback : function () { };
        var _positive_example_classes = Object.keys(_params).filter(function (key) {
            return key.match(/^.+positive_examples$/);
        }) || ['<classname>_positive_examples'];
        var requiredParams = ['name'].concat(_positive_example_classes);
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var formData = {
            name: _params.name,
            negative_examples: {
                data: _params.negative_examples,
                contentType: 'application/octet-stream'
            }
        };
        _positive_example_classes.forEach(function (positive_example_class) {
            formData[positive_example_class] = {
                data: _params[positive_example_class],
                contentType: 'application/octet-stream'
            };
        });
        var parameters = {
            options: {
                url: '/v3/classifiers',
                method: 'POST',
                formData: formData
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data'
                }
            })
        };
        return requestwrapper_1.createRequest(parameters, _callback);
    };
    /**
     * Delete a classifier.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - The ID of the classifier.
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {ReadableStream|void}
     */
    VisualRecognitionV3.prototype.deleteClassifier = function (params, callback) {
        var _params = extend({}, params);
        var _callback = callback ? callback : function () { };
        var requiredParams = ['classifier_id'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            classifier_id: _params.classifier_id
        };
        var parameters = {
            options: {
                url: '/v3/classifiers/{classifier_id}',
                method: 'DELETE',
                path: path
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        };
        return requestwrapper_1.createRequest(parameters, _callback);
    };
    /**
     * Retrieve classifier details.
     *
     * Retrieve information about a user-created classifier.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - The ID of the classifier.
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {ReadableStream|void}
     */
    VisualRecognitionV3.prototype.getClassifier = function (params, callback) {
        var _params = extend({}, params);
        var _callback = callback ? callback : function () { };
        var requiredParams = ['classifier_id'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var path = {
            classifier_id: _params.classifier_id
        };
        var parameters = {
            options: {
                url: '/v3/classifiers/{classifier_id}',
                method: 'GET',
                path: path
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        };
        return requestwrapper_1.createRequest(parameters, _callback);
    };
    /**
     * Retrieve a list of custom classifiers.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {boolean} [params.verbose] - Specify `true` to return classifier details. Omit this parameter to return a brief list of classifiers.
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {ReadableStream|void}
     */
    VisualRecognitionV3.prototype.listClassifiers = function (params, callback) {
        var _params = typeof params === 'function' && !callback ? {} : extend({}, params);
        var _callback = typeof params === 'function' && !callback
            ? params
            : callback ? callback : function () { };
        var query = {
            verbose: _params.verbose
        };
        var parameters = {
            options: {
                url: '/v3/classifiers',
                method: 'GET',
                qs: query
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        };
        return requestwrapper_1.createRequest(parameters, _callback);
    };
    /**
     * Update a classifier.
     *
     * Update a custom classifier by adding new positive or negative classes (examples) or by adding new images to existing classes. You must supply at least one set of positive or negative examples. For details, see [Updating custom classifiers](https://console.bluemix.net/docs/services/visual-recognition/customizing.html#updating-custom-classifiers).  **Important:** You can't update a custom classifier with a free API key. If you have a free key, you can upgrade to a Standard plan. For details, see [Changing your plan](https://console.bluemix.net/docs/pricing/changing_plan.html).  **Tip:** Don't make retraining calls on a classifier until the status is ready. When you submit retraining requests in parallel, the last request overwrites the previous requests. The retrained property shows the last time the classifier retraining finished.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.classifier_id - The ID of the classifier.
     * @param {ReadableStream|FileObject|Buffer} [params.classname_positive_examples] - A .zip file of images that depict the visual subject of a class in the classifier. The positive examples create or update classes in the classifier. You can include more than one positive example file in a call. Append `_positive_examples` to the form name. The prefix is used to name the class. For example, `goldenretriever_positive_examples` creates the class `goldenretriever`.  Include at least 10 images in .jpg or .png format. The minimum recommended image resolution is 32X32 pixels. The maximum number of images is 10,000 images or 100 MB per .zip file.
     * @param {ReadableStream|FileObject|Buffer} [params.negative_examples] - A compressed (.zip) file of images that do not depict the visual subject of any of the classes of the new classifier. Must contain a minimum of 10 images.
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {ReadableStream|void}
     */
    VisualRecognitionV3.prototype.updateClassifier = function (params, callback) {
        var _params = extend({}, params);
        var _callback = callback ? callback : function () { };
        var _positive_example_classes = Object.keys(_params).filter(function (key) {
            return key.match(/^.+positive_examples$/);
        });
        var requiredParams = ['classifier_id'];
        var missingParams = helper_1.getMissingParams(_params, requiredParams);
        if (missingParams) {
            return _callback(missingParams);
        }
        var formData = {
            negative_examples: {
                data: _params.negative_examples,
                contentType: 'application/octet-stream'
            }
        };
        _positive_example_classes.forEach(function (positive_example_class) {
            formData[positive_example_class] = {
                data: _params[positive_example_class],
                contentType: 'application/octet-stream'
            };
        });
        var path = {
            classifier_id: _params.classifier_id
        };
        var parameters = {
            options: {
                url: '/v3/classifiers/{classifier_id}',
                method: 'POST',
                path: path,
                formData: formData
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data'
                }
            })
        };
        return requestwrapper_1.createRequest(parameters, _callback);
    };
    VisualRecognitionV3.URL = 'https://gateway-a.watsonplatform.net/visual-recognition/api';
    return VisualRecognitionV3;
}(base_service_1.BaseService));
VisualRecognitionV3.prototype.name = 'visual_recognition';
VisualRecognitionV3.prototype.version = 'v3';
/*************************
 * interfaces
 ************************/
(function (VisualRecognitionV3) {
    /** Constants for the `classify` operation. **/
    var ClassifyConstants;
    (function (ClassifyConstants) {
        /** Specifies the language of the output class names.  Can be `en` (English), `ar` (Arabic), `de` (German), `es` (Spanish), `it` (Italian), `ja` (Japanese), or `ko` (Korean).  Classes for which no translation is available are omitted.  The response might not be in the specified language under these conditions: - English is returned when the requested language is not supported. - Classes are not returned when there is no translation for them. - Custom classifiers returned with this method return tags in the language of the custom classifier. **/
        var AcceptLanguage;
        (function (AcceptLanguage) {
            AcceptLanguage["EN"] = "en";
            AcceptLanguage["AR"] = "ar";
            AcceptLanguage["DE"] = "de";
            AcceptLanguage["ES"] = "es";
            AcceptLanguage["IT"] = "it";
            AcceptLanguage["JA"] = "ja";
            AcceptLanguage["KO"] = "ko";
        })(AcceptLanguage = ClassifyConstants.AcceptLanguage || (ClassifyConstants.AcceptLanguage = {}));
    })(ClassifyConstants = VisualRecognitionV3.ClassifyConstants || (VisualRecognitionV3.ClassifyConstants = {}));
})(VisualRecognitionV3 || (VisualRecognitionV3 = {}));
module.exports = VisualRecognitionV3;
//# sourceMappingURL=v3-generated.js.map