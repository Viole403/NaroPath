import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'Post title',
    example: 'How to Get Started with NestJS',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Post content',
    example: 'NestJS is a progressive Node.js framework...',
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    description: 'Post slug (URL-friendly identifier)',
    example: 'how-to-get-started-with-nestjs',
    required: false,
  })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({
    description: 'Post excerpt/summary',
    example: 'Learn the basics of NestJS in this introductory guide',
    required: false,
  })
  @IsString()
  @IsOptional()
  excerpt?: string;

  @ApiProperty({
    description: 'Is this a featured post?',
    example: false,
    default: false,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  featured?: boolean;

  @ApiProperty({
    description: 'Is this post published?',
    example: true,
    default: false,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  published?: boolean;

  @ApiProperty({
    description: 'Category IDs',
    example: ['123e4567-e89b-12d3-a456-426614174000'],
    required: false,
    type: [String],
  })
  @IsArray()
  @IsOptional()
  categoryIds?: string[];

  @ApiProperty({
    description: 'Tag IDs',
    example: ['123e4567-e89b-12d3-a456-426614174000'],
    required: false,
    type: [String],
  })
  @IsArray()
  @IsOptional()
  tagIds?: string[];
}