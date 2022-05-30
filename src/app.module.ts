import { Module, ValidationPipe } from '@nestjs/common';
import {ApolloDriver} from '@nestjs/apollo'
import {GraphQLModule} from '@nestjs/graphql'
import { GraphqlOptions } from './graphql.options';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core'
import { UserModule } from './user/user.module';
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
      driver: ApolloDriver,
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    AwsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ],
})
export class AppModule {}
