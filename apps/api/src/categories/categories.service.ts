import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import slugify from 'slugify';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const { name, description } = createCategoryDto;

    // Generate slug if not provided
    let { slug } = createCategoryDto;
    if (!slug) {
      slug = slugify(name, { lower: true, strict: true });
    }

    // Check if name or slug already exists
    const existingCategory = await this.prisma.category.findFirst({
      where: {
        OR: [
          { name },
          { slug },
        ],
      },
    });

    if (existingCategory) {
      throw new BadRequestException('Category with this name or slug already exists');
    }

    return this.prisma.category.create({
      data: {
        name,
        slug,
        description,
      },
    });
  }

  async findAll(query: { skip?: number; take?: number; search?: string }) {
    const { skip = 0, take = 10, search } = query;

    const where = search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};

    const [categories, total] = await Promise.all([
      this.prisma.category.findMany({
        skip,
        take,
        where,
        orderBy: { name: 'asc' },
        include: {
          _count: {
            select: {
              posts: true,
              courses: true,
            },
          },
        },
      }),
      this.prisma.category.count({ where }),
    ]);

    return {
      data: categories,
      meta: {
        total,
        skip,
        take,
      },
    };
  }

  async findOne(slug: string) {
    const category = await this.prisma.category.findUnique({
      where: { slug },
      include: {
        _count: {
          select: {
            posts: true,
            courses: true,
          },
        },
      },
    });

    if (!category) {
      throw new NotFoundException(`Category with slug "${slug}" not found`);
    }

    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    // Check if category exists
    const category = await this.prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException(`Category with ID "${id}" not found`);
    }

    const { name, description } = updateCategoryDto;

    // Generate slug if name changed and slug not provided
    let { slug } = updateCategoryDto;
    if (name && !slug) {
      slug = slugify(name, { lower: true, strict: true });
    }

    // Check if name or slug already exists on a different category
    if (name || slug) {
      const existingCategory = await this.prisma.category.findFirst({
        where: {
          OR: [
            name ? { name } : {},
            slug ? { slug } : {},
          ],
          id: { not: id },
        },
      });

      if (existingCategory) {
        throw new BadRequestException('Category with this name or slug already exists');
      }
    }

    return this.prisma.category.update({
      where: { id },
      data: {
        name,
        slug,
        description,
      },
    });
  }

  async remove(id: string) {
    // Check if category exists
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            posts: true,
            courses: true,
          },
        },
      },
    });

    if (!category) {
      throw new NotFoundException(`Category with ID "${id}" not found`);
    }

    // Check if category has posts or courses
    if (category._count.posts > 0 || category._count.courses > 0) {
      throw new BadRequestException('Cannot delete category that has posts or courses');
    }

    return this.prisma.category.delete({
      where: { id },
    });
  }
}