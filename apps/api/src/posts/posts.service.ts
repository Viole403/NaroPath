import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import slugify from 'slugify';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto, authorId: string) {
    const { title, categoryIds = [], tagIds = [], ...rest } = createPostDto;

    // Generate slug if not provided
    let { slug } = createPostDto;
    if (!slug) {
      slug = slugify(title, { lower: true, strict: true });
    }

    // Check if slug already exists
    const existingPost = await this.prisma.post.findUnique({
      where: { slug },
    });

    if (existingPost) {
      throw new BadRequestException(`Post with slug "${slug}" already exists`);
    }

    // Create post with relations
    return this.prisma.post.create({
      data: {
        title,
        slug,
        ...rest,
        author: {
          connect: { id: authorId },
        },
        categories: categoryIds.length > 0 ? {
          connect: categoryIds.map(id => ({ id })),
        } : undefined,
        tags: tagIds.length > 0 ? {
          connect: tagIds.map(id => ({ id })),
        } : undefined,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        categories: true,
        tags: true,
      },
    });
  }

  async findAll(query: {
    skip?: number;
    take?: number;
    search?: string;
    categoryId?: string;
    tagId?: string;
    authorId?: string;
    featured?: boolean;
    published?: boolean;
  }) {
    const {
      skip = 0,
      take = 10,
      search,
      categoryId,
      tagId,
      authorId,
      featured,
      published = true, // Default to published posts
    } = query;

    // Build where conditions
    const where: any = {};

    // Published filter
    if (published !== undefined) {
      where.published = published;
    }

    // Author filter
    if (authorId) {
      where.authorId = authorId;
    }

    // Featured filter
    if (featured !== undefined) {
      where.featured = featured;
    }

    // Search filter
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Category filter
    if (categoryId) {
      where.categories = {
        some: { id: categoryId },
      };
    }

    // Tag filter
    if (tagId) {
      where.tags = {
        some: { id: tagId },
      };
    }

    const [posts, total] = await Promise.all([
      this.prisma.post.findMany({
        skip,
        take,
        where,
        orderBy: { createdAt: 'desc' },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          categories: true,
          tags: true,
          _count: {
            select: { comments: true },
          },
        },
      }),
      this.prisma.post.count({ where }),
    ]);

    return {
      data: posts,
      meta: {
        total,
        skip,
        take,
      },
    };
  }

  async findOne(slug: string) {
    const post = await this.prisma.post.findUnique({
      where: { slug },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        categories: true,
        tags: true,
        comments: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!post) {
      throw new NotFoundException(`Post with slug "${slug}" not found`);
    }

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto, authorId?: string) {
    const { categoryIds, tagIds, ...data } = updatePostDto;

    // Check if post exists and belongs to the author (if authorId is provided)
    const post = await this.prisma.post.findUnique({
      where: { id },
      include: {
        categories: true,
        tags: true,
      },
    });

    if (!post) {
      throw new NotFoundException(`Post with ID "${id}" not found`);
    }

    if (authorId && post.authorId !== authorId) {
      throw new BadRequestException('You can only update your own posts');
    }

    // Update slug if title changed
    if (updatePostDto.title && !updatePostDto.slug) {
      data.slug = slugify(updatePostDto.title, { lower: true, strict: true });

      // Check if new slug already exists on another post
      const existingPost = await this.prisma.post.findFirst({
        where: {
          slug: data.slug,
          id: { not: id },
        },
      });

      if (existingPost) {
        throw new BadRequestException(`Post with slug "${data.slug}" already exists`);
      }
    }

    // Update post with new data
    return this.prisma.post.update({
      where: { id },
      data: {
        ...data,
        categories: categoryIds ? {
          set: [],
          connect: categoryIds.map(id => ({ id })),
        } : undefined,
        tags: tagIds ? {
          set: [],
          connect: tagIds.map(id => ({ id })),
        } : undefined,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        categories: true,
        tags: true,
      },
    });
  }

  async remove(id: string, authorId?: string) {
    // Check if post exists and belongs to the author (if authorId is provided)
    const post = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      throw new NotFoundException(`Post with ID "${id}" not found`);
    }

    if (authorId && post.authorId !== authorId) {
      throw new BadRequestException('You can only delete your own posts');
    }

    return this.prisma.post.delete({
      where: { id },
    });
  }
}