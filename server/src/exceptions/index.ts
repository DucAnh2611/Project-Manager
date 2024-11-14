import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { EErrorCode } from 'src/enums';
import { ERequestCode } from 'src/enums/request-code.enum';
import { ErrorResponse } from 'src/utils';
import { AppException } from './base.exception';

@Catch(HttpException)
export class AppHttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const contextException = host.switchToHttp();
        // const request: Request = contextException.getRequest();
        const responseException: Response = contextException.getResponse();

        const caughtExeption: HttpException | AppException = exception;

        let response: object;
        let status: ERequestCode;
        let path: string[] | undefined;

        if (caughtExeption instanceof HttpException) {
            const rawException = caughtExeption.getResponse();
            status = caughtExeption.getStatus();

            response = {
                error: EErrorCode.PROCESSING,
                detail: rawException,
            };
        } else if (caughtExeption instanceof AppException) {
            const detail = caughtExeption.getDetail();
            const errorCode = caughtExeption.getError();

            path = caughtExeption.getPath();
            status = caughtExeption.getStatus();

            response = {
                error: errorCode,
                detail: detail,
            };
        } else {
            status = ERequestCode.INTERNAL_SERVER_ERROR;

            response = {
                status,
                error: EErrorCode.PROCESSING,
                detail: caughtExeption,
            };
        }

        return responseException.status(status).send(
            ErrorResponse({
                status,
                ...response,
            }),
        );
    }
}
