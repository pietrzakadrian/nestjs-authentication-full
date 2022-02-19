import { Injectable } from '@nestjs/common';
import { RegistrationDto } from 'src/authentication/dtos/registration.dto';
import { AuthenticationEntity } from 'src/authentication/entities';
import { QueryRunner } from 'typeorm';
import { UserEntity } from '../entities';
import { UserRepository } from '../repositories';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  public async createUser(
    registrationDto: RegistrationDto,
    authentication: AuthenticationEntity,
    queryRunner: QueryRunner,
  ): Promise<UserEntity> {
    const user = this._userRepository.create({
      ...registrationDto,
      authentication,
    });

    return queryRunner.manager.save(user);
  }
}
