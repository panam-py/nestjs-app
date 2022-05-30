import { LoginInput } from '../graphql.schema.generated';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { SignUpInputDto } from './sign-up-input.dto';
import { Response } from 'express';
export declare class AuthResolver {
    private readonly jwt;
    private readonly prisma;
    constructor(jwt: JwtService, prisma: PrismaService);
    login({ email, password }: LoginInput, res: Response): Promise<import(".prisma/client").User>;
    signup(signUpInputDto: SignUpInputDto, res: Response): Promise<import(".prisma/client").User>;
}
