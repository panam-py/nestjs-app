"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const graphqlUploadExpress_1 = require("graphql-upload/graphqlUploadExpress");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, graphqlUploadExpress_1.default)({ maxFileSize: 10000000, maxFiles: 10 }));
    app.use(cookieParser());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map