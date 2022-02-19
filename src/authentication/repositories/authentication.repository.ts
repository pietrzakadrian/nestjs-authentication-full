import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { AuthenticationEntity } from '../entities';

@EntityRepository(AuthenticationEntity)
export class AuthenticationRepository extends Repository<AuthenticationEntity> {}
