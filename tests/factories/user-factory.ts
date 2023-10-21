import bcrypt from 'bcrypt'
import { faker } from '@faker-js/faker'
import { User } from '@prisma/client'
import { prisma } from '@/config'

export async function createUser(params: Partial<User> = {}): Promise<User> {
    const incomingPassword = params.password || faker.string.uuid()
    const hashedPassword = await bcrypt.hash(incomingPassword, 10)

    return prisma.user.create({
        data: {
            name: params.name || faker.person.fullName(),
            email: params.email || faker.internet.email(),
            password: hashedPassword,
            address: params.address || faker.location.streetAddress(),
            phone: params.phone || faker.string.numeric(11)
        }
    })
}
