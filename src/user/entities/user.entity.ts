import { AuthenticationEntity } from 'src/authentication/entities';
import { AbstractEntity } from 'src/common/entities';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity {
  @Column()
  public firstName: string;

  @OneToOne(
    () => AuthenticationEntity,
    (authentication: AuthenticationEntity) => authentication.user,
    { eager: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn()
  public authentication: AuthenticationEntity;
}
