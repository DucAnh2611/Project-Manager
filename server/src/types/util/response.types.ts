import { EErrorCode } from 'src/enums';
import { ERequestCode } from 'src/enums/request-code.enum';
import { TDetailErrorException } from '../exception';

export type TDataResponseFormat = object | object[];

export type TResponseFormat = {
    success: boolean;
    status: ERequestCode;
    data?: TDataResponseFormat;
    error?: EErrorCode;
    detail?: string | TDetailErrorException;
};

export type TSuccessResponseFormat = {
    status?: ERequestCode;
    data?: TDataResponseFormat;
};

export type TErrorResponseFormat = {
    status: ERequestCode;
    error?: EErrorCode;
    detail?: string | TDetailErrorException;
};
