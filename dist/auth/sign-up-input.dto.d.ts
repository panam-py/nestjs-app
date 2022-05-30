import { SignUpInput } from '../graphql.schema.generated';
export declare class SignUpInputDto extends SignUpInput {
    readonly email: string;
    readonly password: string;
}
