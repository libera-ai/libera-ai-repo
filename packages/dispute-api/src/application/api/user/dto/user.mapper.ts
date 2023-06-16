import { User } from '@domain/entities/user.entity'
import { UserStatus } from '@domain/enums/user-status.enum'

import UserV1InputDto from './user.v1.input'
import UserV1OutputDto from './user.v1.output'

export class UserMapper {
  public static toDto(user: User): UserV1OutputDto {
    return {
      id: user.id,
      name: user.name,
      cpf: user.cpf,
      email: user.email,
      status: user.status,
      bids: user.bids,
      roles: user.roles,
    }
  }

  public static toList(users: User[]): UserV1OutputDto[] {
    return users.map(this.toDto)
  }

  public static toEntity(environmentInputV1Dto: UserV1InputDto): User {
    return new User(
      environmentInputV1Dto.name,
      environmentInputV1Dto.email,
      environmentInputV1Dto.password,
      environmentInputV1Dto.cpf,
      UserStatus.INACTIVE,
    )
  }
}