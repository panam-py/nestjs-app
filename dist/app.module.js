"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
const graphql_options_1 = require("./graphql.options");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRootAsync({
                useClass: graphql_options_1.GraphqlOptions,
                driver: apollo_1.ApolloDriver
            }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_PIPE,
                useClass: common_1.ValidationPipe
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map