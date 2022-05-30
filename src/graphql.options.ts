import {GqlModuleOptions, GqlOptionsFactory} from '@nestjs/graphql'
import {Injectable} from '@nestjs/common'
import {join} from 'path'

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
    createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
        return {
            context: ({req, res}) => ({req, res}),
            typePaths: ['./src/*/*.graphql'],
            // installSubscriptionHandlers: true,
            // resolverValidationOptions: {
            //     // requireResolversForResolveType: false,
            // },
            definitions: {
                path: join(process.cwd(), 'src/graphql.schema.generated.ts'),
                outputAs: 'class',
            },
            // degub: true,
            // introspection: true,
            // playground: true,
            // cors: false,
        }
    }
}