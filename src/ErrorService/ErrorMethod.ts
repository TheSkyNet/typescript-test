import {ErrorServiceHttpStatusCodes} from "./ErrorServiceHttpStatusCodes";

export type ErrorMethod = (message?: string) => {
    readonly statusCode: number,
    readonly message: string,
    readonly errorCode: ErrorServiceHttpStatusCodes
};


