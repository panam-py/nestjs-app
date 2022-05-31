import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import FileUpload from 'graphql-upload/Upload.js';
// import {AWSService} from '../aws/aws.service'
import {UseGuards} from '@nestjs/common';
import {GqlAuthGuard} from '../auth/graphql-auth.guard';
import { GqlUser } from 'src/shared/decorators/decorators';
import { User } from '@prisma/client';
import {createWriteStream} from 'fs'

@Resolver('User')
export class UserResolver {
    constructor
    (
        private readonly prisma: PrismaService,
        // private readonly awsService: AWSService
    ) {}

    Upload: GraphQLUpload

    @Mutation(() => Boolean)
    // @Mutation()
    @UseGuards(GqlAuthGuard)
    async uploadPic(
        @Args('file', {type: () => GraphQLUpload}) 
        {
            createReadStream,
            filename
        }: FileUpload,
        @ GqlUser() user:User,
    ): Promise<boolean>{
       return new Promise(async (resolve, reject) => {
           const name = `${filename}-${user.id}-${Date.now()}`
           createReadStream().pipe(createWriteStream(`../uploads/${name}`)).on('finish', async () => {
                await this.prisma.client.user.update({
                    where: {
                        id: user.id
                    },
                    data: {
                        profilePicture: name
                    }
                })
                resolve(true)
            }).on('error', () => reject(false))
       })
    }

}
