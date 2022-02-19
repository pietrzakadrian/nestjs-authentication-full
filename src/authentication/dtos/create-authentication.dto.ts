import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateAuthenticationDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly emailAddress: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  readonly password: string;
}
