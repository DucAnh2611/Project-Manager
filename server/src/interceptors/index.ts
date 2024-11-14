import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request, Response } from 'express';
import { map, Observable } from 'rxjs';
import { ERequestCode } from 'src/enums/request-code.enum';
import { SuccessResponse } from 'src/utils';
import { AppResponseInterceptor } from './response.interceptor';

@Injectable()
export class AppInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const request: Request = context.switchToHttp().getRequest();
        const start = Date.now();

        return next.handle().pipe(
            map(data => {
                const response: Response = context.switchToHttp().getResponse();
                let status: ERequestCode = ERequestCode.OK;
                let result: object | object[] = data;
                const message: string = '';

                if (data instanceof AppResponseInterceptor) {
                    status = data.getStatus();
                    result = data.getResult();
                }

                response.status(status);

                return SuccessResponse({
                    status: status,
                    data: result,
                });
            }),
        );
    }
}
