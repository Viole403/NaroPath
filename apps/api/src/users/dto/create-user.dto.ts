import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, IsEnum, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({
    description: 'User email',
    example: 'user@example.com',
  })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'password123',
    minLength: 6,
  })
  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @ApiProperty({
    description: 'User name',
    example: 'John Doe',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'User role',
    enum: Role,
    default: Role.USER,
    required: false,
  })
  @IsEnum(Role)
  @IsOptional()
  role?: Role;

  @ApiProperty({
    description: 'Is admin user',
    example: false,
    default: false,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  isAdmin?: boolean;

  @ApiProperty({
    description: 'Is active user',
    example: true,
    default: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty({
    description: 'Is verified user',
    example: false,
    default: false,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  isVerified?: boolean;
}