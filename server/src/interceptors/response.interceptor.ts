import { ERequestCode } from 'src/enums/request-code.enum';
import { TAppResponseInterceptor } from 'src/types/interceptor';

export class AppResponseInterceptor {
    private readonly status: ERequestCode;
    private readonly result: object | object[] | undefined;

    constructor({ result, statusCode }: TAppResponseInterceptor) {
        this.status = statusCode;
        this.result = result;
    }

    getStatus() {
        return this.status;
    }

    getResult() {
        return this.result;
    }
}
