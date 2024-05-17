import {ErrorServiceConfigItem} from "./ConfigItem";
import {ErrorMethod} from "./ErrorMethod";
import {ErrorServiceHttpStatusCodes} from "./ErrorServiceHttpStatusCodes";


/**
 * @class
 * @classdesc The ErrorServiceErrorMethods class represents a collection of error "magick" methods
 * If you're here and confused about the type definition is for your magic method it's because it's not there it's a magic method
 *
 * @typedef {Object.<string, ErrorMethod>} ErrorServiceErrorMethods
 */
type ErrorServiceErrorMethods = {
    [key: string]: ErrorMethod;
};


/**
 * Creates an object containing error methods based on a given configuration.
 *
 * @param {ErrorServiceConfigItem[]} config - The configuration for error methods.
 * @returns {ErrorServiceErrorMethods} - The object containing error methods.
 */
export const createErrorMethods = (config: ErrorServiceConfigItem[]): ErrorServiceErrorMethods => {


    let errorMethodsObject: ErrorServiceErrorMethods = {};

    // It writes all of the configurations to produce
    for (const currentConfigItem of config) {

        const httpStatusCode = ErrorServiceHttpStatusCodes[currentConfigItem.statusCode as unknown as keyof typeof ErrorServiceHttpStatusCodes] || ErrorServiceHttpStatusCodes.UNKNOWN;
        let newErrorMethod = (message: string = currentConfigItem.defaultText) => ({
            statusCode: currentConfigItem.statusCode,
            message: message,
            errorCode: httpStatusCode,
        })
        // Add new error method to our methods object
        errorMethodsObject[currentConfigItem.methodName] = newErrorMethod;
    }
    return errorMethodsObject;
}
