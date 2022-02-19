import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { AuthenticationEntity } from '../entities';
import { AuthenticationProvider } from '../providers';

@EventSubscriber()
export class AuthenticationSubscriber
  implements EntitySubscriberInterface<AuthenticationEntity>
{
  listenTo() {
    return AuthenticationEntity;
  }

  public async beforeInsert({
    entity,
  }: InsertEvent<AuthenticationEntity>): Promise<void> {
    if (entity.password) {
      entity.password = await AuthenticationProvider.generateHash(
        entity.password,
      );
    }

    if (entity.emailAddress) {
      entity.emailAddress = entity.emailAddress.toLowerCase();
    }
  }

  public async beforeUpdate({
    entity,
    databaseEntity,
  }: UpdateEvent<AuthenticationEntity>): Promise<void> {
    if (entity.password) {
      const password = await AuthenticationProvider.generateHash(
        entity.password,
      );

      if (password !== databaseEntity?.password) {
        entity.password = password;
      }
    }
  }
}
