import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({
    description: 'Tag name',
    example: 'React',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Tag slug (URL-friendly identifier)',
    example: 'react',
    required: false,
  })
  @IsString()
  @IsOptional()
  slug?: string;
}