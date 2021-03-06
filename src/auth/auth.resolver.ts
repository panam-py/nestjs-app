import * as bcryptjs from 'bcryptjs'
import {Args, Mutation, Resolver} from '@nestjs/graphql'
import {LoginInput} from '../graphql.schema.generated'
import {ResGql} from '../shared/decorators/decorators'
import {JwtService} from '@nestjs/jwt'
import {PrismaService} from '../prisma/prisma.service'
import {SignUpInputDto} from './sign-up-input.dto'
import { Response } from 'express'

@Resolver()
export class AuthResolver {
    constructor(
        private readonly jwt: JwtService,
        private readonly prisma: PrismaService,
    ) {}

    @Mutation()
    async login(
        @Args('loginInput') {email, password}: LoginInput,
        @ResGql() res: Response,
    ) {
        const user = await this.prisma.client.user.findUnique({
            where: {
                email
            }
        })
        if(!user) {
            throw Error('Email or password incorrect');
        }

        const valid = await bcryptjs.compare(password, user.password)

        if(!valid) {
            throw Error('Email or password incorrect')
        }

        const jwt = this.jwt.sign({id: user.id});
        res.cookie('token', jwt, {httpOnly: true});

        console.log(user)

        return user;
    }

    @Mutation()
    async signup(
        @Args('signUpInput') signUpInputDto: SignUpInputDto,
        @ResGql() res: Response
    ) {
        const emailExists = await this.prisma.client.user.findUnique({
            where: {
                email: signUpInputDto.email
            }
        })

        if (emailExists) {
            throw Error('Email is already in use');
        }

        const password = await bcryptjs.hash(signUpInputDto.password, 10);

        const user = await this.prisma.client.user.create({
            data: {
                email: signUpInputDto.email,
                password,
                profilePicture: '',
                createdAt: new Date(Date.now())
            }
        })

        const jwt = this.jwt.sign({id: user.id});
        res.cookie('token', jwt, {httpOnly: true});

        return user;
    }
}
