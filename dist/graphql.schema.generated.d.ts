export declare class SignUpInput {
    email: string;
    password: string;
}
export declare class LoginInput {
    email: string;
    password: string;
}
export declare class User {
    id: string;
    email: string;
    password: string;
    profilePic?: Nullable<string>;
}
export declare class AuthPayload {
    id: string;
    email: string;
}
export declare abstract class IQuery {
    abstract user(id: number): User | Promise<User>;
    abstract users(): User[] | Promise<User[]>;
}
export declare abstract class IMutation {
    abstract signup(signUpInput?: Nullable<SignUpInput>): AuthPayload | Promise<AuthPayload>;
    abstract login(loginInput?: Nullable<LoginInput>): Nullable<AuthPayload> | Promise<Nullable<AuthPayload>>;
}
declare type Nullable<T> = T | null;
export {};
