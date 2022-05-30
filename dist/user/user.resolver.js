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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const prisma_service_1 = require("../prisma/prisma.service");
const GraphQLUpload_js_1 = require("graphql-upload/GraphQLUpload.js");
const Upload_js_1 = require("graphql-upload/Upload.js");
const aws_service_1 = require("../aws/aws.service");
const common_1 = require("@nestjs/common");
const graphql_auth_guard_1 = require("../auth/graphql-auth.guard");
const decorators_1 = require("../shared/decorators/decorators");
let UserResolver = class UserResolver {
    constructor(prisma, awsService) {
        this.prisma = prisma;
        this.awsService = awsService;
    }
    async uploadPic(file, user) {
        try {
            const awsResponse = await this.awsService.uploadFile(file);
            this.prisma.client.user.update({
                where: {
                    id: user.id
                },
                data: {
                    profilePicture: awsResponse.Location
                }
            });
            console.log(awsResponse);
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => Boolean, { name: 'uploadPic' }),
    (0, common_1.UseGuards)(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('file', { type: () => GraphQLUpload_js_1.default })),
    __param(1, (0, decorators_1.GqlUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof Upload_js_1.default !== "undefined" && Upload_js_1.default) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "uploadPic", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)('User'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, aws_service_1.AWSService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map