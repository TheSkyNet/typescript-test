import {createErrorMethods} from "./ErrorService/createErrorMethods";

const config = [
    {methodName: 'badRequest', statusCode: 400, defaultText: 'Bad Request'},
    {methodName: 'notFound', statusCode: 404, defaultText: 'Not Found'}
]

const errorMethods = createErrorMethods(config);

// we can do some assignment destructuring  We are assuming these exist this isn't great typescript because we can lose confidence in types
const {badRequest, notFound} = errorMethods;

console.log(badRequest());
console.log(notFound("This is an override text for the 'Not Found' method."));

const methods = createErrorMethods(config);

console.log(methods.badRequest());
console.log(methods.notFound("This is an override text for the 'Not Found' method."));

//console.log(methods.notFound("This is an override text for the 'Not Found' method.").message =123);
