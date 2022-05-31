"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const bcryptjs = require("bcryptjs");
const graphql_1 = require("@nestjs/graphql");
const graphql_schema_generated_1 = require("../graphql.schema.generated");
const decorators_1 = require("../shared/decorators/decorators");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const sign_up_input_dto_1 = require("./sign-up-input.dto");
let AuthResolver = class AuthResolver {
    constructor(jwt, prisma) {
        this.jwt = jwt;
        this.prisma = prisma;
    }
    async login({ email, password }, res) {
        const user = await this.prisma.client.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            throw Error('Email or password incorrect');
        }
        const valid = await bcryptjs.compare(password, user.password);
        if (!valid) {
            throw Error('Email or password incorrect');
        }
        const jwt = this.jwt.sign({ id: user.id });
        res.cookie('token', jwt, { httpOnly: true });
        console.log(user);
        return user;
    }
    async signup(signUpInputDto, res) {
        const emailExists = await this.prisma.client.user.findUnique({
            where: {
                email: signUpInputDto.email
            }
        });
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
        });
        const jwt = this.jwt.sign({ id: user.id });
        res.cookie('token', jwt, { httpOnly: true });
        return user;
    }
};
__decorate([
    (0, graphql_1.Mutation)(),
    __param(0, (0, graphql_1.Args)('loginInput')),
    __param(1, (0, decorators_1.ResGql)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_generated_1.LoginInput, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)(),
    __param(0, (0, graphql_1.Args)('signUpInput')),
    __param(1, (0, decorators_1.ResGql)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_up_input_dto_1.SignUpInputDto, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signup", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map