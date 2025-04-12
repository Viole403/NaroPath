import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }));

  // CORS
  app.enableCors();

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Course Platform API')
    .setDescription('The API for an online course platform with blog management, course handling, and more')
    .setVersion('1.0')
    .addTag('auth', 'Authentication endpoints')
    .addTag('users', 'User management endpoints')
    .addTag('blogs', 'Blog management endpoints')
    .addTag('courses', 'Course management endpoints')
    .addTag('programs', 'Government program endpoints')
    .addTag('scholarships', 'Scholarship management endpoints')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Start the server
  const port = process.env.API_PORT || process.env.PORT || 3001;
  await app.listen(port);
  console.log(`API server running on port ${port}`);
}

bootstrap();
