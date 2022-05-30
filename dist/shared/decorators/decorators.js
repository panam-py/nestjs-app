"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlUser = exports.ResGql = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.ResGql = (0, common_1.createParamDecorator)((data, context) => graphql_1.GqlExecutionContext.create(context).getContext().res);
exports.GqlUser = (0, common_1.createParamDecorator)((data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context).getContext();
    return ctx.req && ctx.req.user;
});
//# sourceMappingURL=decorators.js.map