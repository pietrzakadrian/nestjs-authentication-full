import { Exclude } from 'class-transformer';
import { AbstractEntity } from 'src/common/entities';
import { UserEntity } from 'src/user/entities';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity({ name: 'authentications' })
export class AuthenticationEntity extends AbstractEntity {
  @Column({ unique: true })
  public emailAddress: string;

  @Column()
  @Exclude()
  public password: string;

  @OneToOne(() => UserEntity, (user: UserEntity) => user.authentication)
  @Exclude()
  public user: UserEntity;
}
