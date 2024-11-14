import { EErrorCode } from 'src/enums';
import { ERequestCode } from 'src/enums/request-code.enum';

export type TDetailErrorException = object | object[];

export type TAppException = {
    statusCode: ERequestCode;
    errorCode?: EErrorCode;
    detail?: TDetailErrorException;
    path?: string[];
};
