import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import { userRepository } from '@/repositories'
import { duplicatedCpfError, duplicatedEmailError } from '@/errors'

export type CreateUserParams = Omit<
    User,
    'createdAt' | 'updatedAt' | 'lastAccess' | 'id'
>

export async function createUser({
    name,
    email,
    password,
    cpf
}: CreateUserParams) {
    await validateUniqueEmailOrFail(email)
    await validateUniqueCpfOrFail(cpf)

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await userRepository.create({
        name,
        email,
        password: hashedPassword,
        cpf
    })

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        cpf: user.cpf
    }
}

async function validateUniqueEmailOrFail(email: string) {
    const userWithSameEmail = await userRepository.findByEmail(email)
    if (userWithSameEmail) {
        throw duplicatedEmailError()
    }
}

async function validateUniqueCpfOrFail(cpf: string) {
    const userWithSameCpf = await userRepository.findByCpf(cpf)
    if (userWithSameCpf) {
        throw duplicatedCpfError()
    }
}

export const userService = {
    createUser
}
