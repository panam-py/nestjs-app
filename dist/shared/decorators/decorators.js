"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlUser = exports.ResGql = void 0;
const common_1 = require("@nestjs/common");
exports.ResGql = (0, common_1.createParamDecorator)((data, [root, args, ctx, info]) => ctx.res);
exports.GqlUser = (0, common_1.createParamDecorator)((data, [root, args, ctx, info]) => ctx.req && ctx.req.user);
//# sourceMappingURL=decorators.js.map