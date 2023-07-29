
export class HttpError {
    status: number;
    message!: string;
    code?: string;

    constructor(message: string, status: number, code?: string) {
        this.message = message;
        this.status = status;
        this.code = code;
    }
}

export class NotFoundException extends HttpError {
    constructor(message: string) {
        super(message, 404)
    }
}

export const handleexception = (data, entity: string, id: string) => {
    if(data.status === 404) {
        throw new NotFoundException(`${entity} with id: ${id} not found.`);
    }
    throw new HttpError(data.statusText, data.status);
}
