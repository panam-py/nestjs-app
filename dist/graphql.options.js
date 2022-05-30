"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlOptions = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
let GraphqlOptions = class GraphqlOptions {
    createGqlOptions() {
        return {
            context: ({ req, res }) => ({ req, res }),
            typePaths: ['./src/*/*.graphql'],
            definitions: {
                path: (0, path_1.join)(process.cwd(), 'src/graphql.schema.generated.ts'),
                outputAs: 'class',
            },
        };
    }
};
GraphqlOptions = __decorate([
    (0, common_1.Injectable)()
], GraphqlOptions);
exports.GraphqlOptions = GraphqlOptions;
//# sourceMappingURL=graphql.options.js.map