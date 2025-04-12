import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '@prisma/client';

@ApiTags('blogs')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new blog post' })
  @ApiResponse({ status: 201, description: 'Post created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  create(@Body() createPostDto: CreatePostDto, @Req() req) {
    return this.postsService.create(createPostDto, req.user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all blog posts' })
  @ApiQuery({ name: 'skip', required: false, type: Number })
  @ApiQuery({ name: 'take', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiQuery({ name: 'categoryId', required: false, type: String })
  @ApiQuery({ name: 'tagId', required: false, type: String })
  @ApiQuery({ name: 'authorId', required: false, type: String })
  @ApiQuery({ name: 'featured', required: false, type: Boolean })
  @ApiQuery({ name: 'published', required: false, type: Boolean })
  @ApiResponse({ status: 200, description: 'Posts found successfully' })
  findAll(
    @Query('skip') skip?: number,
    @Query('take') take?: number,
    @Query('search') search?: string,
    @Query('categoryId') categoryId?: string,
    @Query('tagId') tagId?: string,
    @Query('authorId') authorId?: string,
    @Query('featured') featured?: boolean,
    @Query('published') published?: boolean,
  ) {
    return this.postsService.findAll({
      skip: Number(skip),
      take: Number(take),
      search,
      categoryId,
      tagId,
      authorId,
      featured: featured === undefined ? undefined : featured === true || featured === 'true',
      published: published === undefined ? undefined : published === true || published === 'true',
    });
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get a blog post by slug' })
  @ApiResponse({ status: 200, description: 'Post found successfully' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  findOne(@Param('slug') slug: string) {
    return this.postsService.findOne(slug);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a blog post' })
  @ApiResponse({ status: 200, description: 'Post updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @Req() req,
  ) {
    // Allow admins to update any post, other users can only update their own
    const authorId = req.user.isAdmin ? undefined : req.user.id;
    return this.postsService.update(id, updatePostDto, authorId);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a blog post' })
  @ApiResponse({ status: 200, description: 'Post deleted successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  remove(@Param('id') id: string, @Req() req) {
    // Allow admins to delete any post, other users can only delete their own
    const authorId = req.user.isAdmin ? undefined : req.user.id;
    return this.postsService.remove(id, authorId);
  }
}