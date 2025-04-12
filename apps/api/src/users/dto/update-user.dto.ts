import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsOptional, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['email'] as const)) {
  @ApiProperty({
    description: 'User password',
    example: 'newpassword123',
    minLength: 6,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password?: string;
}