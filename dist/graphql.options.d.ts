import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
export declare class GraphqlOptions implements GqlOptionsFactory {
    createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions;
}
