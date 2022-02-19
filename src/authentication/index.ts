import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user';
import { AuthenticationController } from './controllers';
import { AuthenticationRepository } from './repositories';
import { AuthenticationService } from './services';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([AuthenticationRepository])],
  providers: [AuthenticationService],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
