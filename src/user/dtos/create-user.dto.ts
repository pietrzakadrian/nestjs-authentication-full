import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateAuthenticationDto } from '../../authentication/dtos';

export class CreateUserDto extends CreateAuthenticationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly firstName: string;
}
