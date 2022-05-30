import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    validate({ id }: {
        id: any;
    }): Promise<User>;
}
