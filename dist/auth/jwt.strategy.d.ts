import { Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
declare const JWTStrategy_base: new (...args: any[]) => Strategy;
export declare class JWTStrategy extends JWTStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(payload: any): Promise<import(".prisma/client").User>;
}
export {};
