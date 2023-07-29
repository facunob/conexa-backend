export declare class HttpError {
    status: number;
    message: string;
    code?: string;
    constructor(message: string, status: number, code?: string);
}
export declare class NotFoundException extends HttpError {
    constructor(message: string);
}
export declare const handleexception: (data: any, entity: string, id: string) => never;
