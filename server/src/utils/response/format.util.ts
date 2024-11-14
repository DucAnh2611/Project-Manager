import { ERequestCode } from 'src/enums/request-code.enum';
import { TErrorResponseFormat, TResponseFormat, TSuccessResponseFormat } from 'src/types/util/response.types';
import { DefaultOrValues } from '../object';

export const ResponseFormat = ({ success = false, data, status, detail, error }: TResponseFormat) => {
    return {
        success,
        status,
        ...DefaultOrValues({
            value: data,
            def: {},
            options: {
                transform: value => ({ data: value }),
            },
        }),
        ...DefaultOrValues({
            value: error,
            def: {},
            options: {
                transform: value => ({ error: value }),
            },
        }),
        ...DefaultOrValues({
            value: detail,
            def: {},
            options: {
                transform: value => ({ detail: value }),
            },
        }),
    };
};

export const SuccessResponse = ({ data, status = ERequestCode.OK }: TSuccessResponseFormat) => {
    return ResponseFormat({
        success: true,
        status,
        data,
    });
};

export const ErrorResponse = ({ status = ERequestCode.INTERNAL_SERVER_ERROR, error, detail }: TErrorResponseFormat) => {
    return ResponseFormat({
        success: false,
        status,
        error,
        detail,
    });
};
