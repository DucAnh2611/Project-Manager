import { EErrorCode } from 'src/enums';
import { ERequestCode } from 'src/enums/request-code.enum';
import { TAppException, TDetailErrorException } from 'src/types/exception';

export class AppException {
    private readonly errorCode: EErrorCode | undefined;
    private readonly statusCode: ERequestCode;
    private readonly detail: TDetailErrorException | undefined;
    private readonly path: string[] | undefined;

    constructor({ errorCode, statusCode, detail, path }: TAppException) {
        this.detail = detail;
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.path = path;
    }

    getDetail() {
        return this.detail;
    }

    getStatus() {
        return this.statusCode;
    }

    getError() {
        return this.errorCode;
    }

    /**
     * The `getPath` function in TypeScript returns the error path
     * @returns The `path` property of the object that the `getPath` method belongs to is being returned.
     */
    getPath() {
        return this.path;
    }
}
