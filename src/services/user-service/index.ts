import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import { userRepository } from '@/repositories'
import { duplicatedEmailError } from '@/errors'

export type CreateUserParams = Omit<
    User,
    'createdAt' | 'updatedAt' | 'lastAccess' | 'id'
>

export async function createUser({
    name,
    email,
    password,
    cpf
}: CreateUserParams): Promise<User> {
    await validateUniqueEmailOrFail(email)

    const hashedPassword = await bcrypt.hash(password, 12)
    return userRepository.create({
        name,
        email,
        password: hashedPassword,
        cpf
    })
}

async function validateUniqueEmailOrFail(email: string) {
    const userWithSameEmail = await userRepository.findByEmail(email)
    if (userWithSameEmail) {
        throw duplicatedEmailError()
    }
}

export const userService = {
    createUser
}
