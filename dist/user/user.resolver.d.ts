import { PrismaService } from 'src/prisma/prisma.service';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import FileUpload from 'graphql-upload/Upload.js';
import { User } from '@prisma/client';
export declare class UserResolver {
    private readonly prisma;
    constructor(prisma: PrismaService);
    Upload: GraphQLUpload;
    uploadPic({ createReadStream, filename }: FileUpload, user: User): Promise<boolean>;
}
