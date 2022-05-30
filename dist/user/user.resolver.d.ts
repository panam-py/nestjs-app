import { PrismaService } from 'src/prisma/prisma.service';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import FileUpload from 'graphql-upload/Upload.js';
import { AWSService } from '../aws/aws.service';
import { User } from '@prisma/client';
export declare class UserResolver {
    private readonly prisma;
    private readonly awsService;
    constructor(prisma: PrismaService, awsService: AWSService);
    Upload: GraphQLUpload;
    uploadPic(file: FileUpload, user: User): Promise<boolean>;
}
