import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppHttpExceptionFilter } from 'src/exceptions';
import { AppResponseInterceptor } from 'src/interceptors/response.interceptor';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [
        /** Setup modules */
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,

        /** Main modules */

        /** Thirdparty modules */

        /** socket, cron, ... modules */
    ],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: AppResponseInterceptor,
        },
        {
            provide: APP_FILTER,
            useClass: AppHttpExceptionFilter,
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: ClassSerializerInterceptor,
        },
    ],
})
export class AppModule {}
