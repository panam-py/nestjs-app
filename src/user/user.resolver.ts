import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import FileUpload from 'graphql-upload/Upload.js';
import {AWSService} from '../aws/aws.service'
import {UseGuards} from '@nestjs/common';
import {GqlAuthGuard} from '../auth/graphql-auth.guard';
import { GqlUser } from 'src/shared/decorators/decorators';
import { User } from '@prisma/client';

@Resolver('User')
export class UserResolver {
    constructor(private readonly prisma: PrismaService, private readonly awsService: AWSService) {}

    Upload: GraphQLUpload

    @Mutation(() => Boolean, {name: 'uploadPic'})
    // @Mutation()
    @UseGuards(GqlAuthGuard)
    async uploadPic(
        @Args('file', {type: () => GraphQLUpload}) file: FileUpload,
        @ GqlUser() user:User,
    ): Promise<boolean>{
        try{
            const awsResponse = await this.awsService.uploadFile(file);
            this.prisma.client.user.update({
                where: {
                    id: user.id
                },
                data: {
                    profilePicture: awsResponse.Location
                }
            })

            console.log(awsResponse)

            return true
        } catch(err){
            console.log(err)
            return false
        }
    }

}
