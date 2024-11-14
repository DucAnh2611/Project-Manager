import { ERequestCode } from 'src/enums/request-code.enum';

export type TAppResponseInterceptor = { result: object; statusCode: ERequestCode };
