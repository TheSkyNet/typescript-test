import {ErrorServiceConfigItem} from "../src/ErrorService/ConfigItem";
import {ErrorServiceHttpStatusCodes} from "../src/ErrorService/ErrorServiceHttpStatusCodes";
import {createErrorMethods} from "../src/ErrorService/createErrorMethods";


describe('createErrorMethods function', () => {
    /**
     * Creates 'notFound' error method using input configuration
     * and checks if the method return value is as expected.
     */
    it('should correctly create error methods based on config', () => {
        const config: ErrorServiceConfigItem[] = [
            {
                methodName: 'notFound',
                statusCode: ErrorServiceHttpStatusCodes.NOT_FOUND,
                defaultText: 'Not found',
            },
        ];

        const methods = createErrorMethods(config);
        expect(methods).toHaveProperty('notFound');
        expect(methods.notFound()).toEqual(
            { statusCode: ErrorServiceHttpStatusCodes.NOT_FOUND, message: 'Not found' });
    });
    /**
     * Creates 'unauthorized' error method using input configuration
     * and checks if the method return value is not as expected.
     */
    it('should fail when creating error methods based on config', () => {
        const config: ErrorServiceConfigItem[] = [
            {
                methodName: 'unauthorized',
                statusCode: ErrorServiceHttpStatusCodes.UNAUTHORIZED,
                defaultText: 'Unauthorized',
            },
        ];

        const methods = createErrorMethods(config);
        expect(methods.unauthorized()).not.toEqual({ statusCode: 202, message: 'Unauthorized' });
    });
});