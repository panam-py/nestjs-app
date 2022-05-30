import { Module } from '@nestjs/common';
import { AwsModule } from 'src/aws/aws.module';
import { AWSService } from 'src/aws/aws.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserResolver, AWSService],
  imports: [PrismaModule, AwsModule]
})
export class UserModule {}
