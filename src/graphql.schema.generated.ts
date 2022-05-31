
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class SignUpInput {
    email: string;
    password: string;
}

export class LoginInput {
    email: string;
    password: string;
}

export class FileUploadInput {
    file: Upload;
}

export class User {
    id: string;
    email: string;
    password: string;
    profilePic?: Nullable<string>;
}

export class AuthPayload {
    id: string;
    email: string;
    profilePic?: Nullable<string>;
}

export abstract class IQuery {
    abstract user(id: number): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract signup(signUpInput?: Nullable<SignUpInput>): AuthPayload | Promise<AuthPayload>;

    abstract login(loginInput?: Nullable<LoginInput>): Nullable<AuthPayload> | Promise<Nullable<AuthPayload>>;

    abstract uploadPic(fileUploadInput?: Nullable<FileUploadInput>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export type Upload = any;
type Nullable<T> = T | null;
