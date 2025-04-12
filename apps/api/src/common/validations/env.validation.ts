import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString, validateSync } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  @IsOptional()
  NODE_ENV: Environment;

  @IsString()
  DATABASE_URL: string;

  @IsNumber()
  @IsOptional()
  PORT: number;

  @IsNumber()
  @IsOptional()
  API_PORT: number;

  @IsString()
  @IsOptional()
  JWT_SECRET: string;

  @IsString()
  @IsOptional()
  JWT_EXPIRES_IN: string;

  @IsString()
  @IsOptional()
  GOOGLE_CLIENT_ID: string;

  @IsString()
  @IsOptional()
  GOOGLE_CLIENT_SECRET: string;

  @IsString()
  @IsOptional()
  GOOGLE_CALLBACK_URL: string;

  @IsString()
  @IsOptional()
  FRONTEND_URL: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(
    EnvironmentVariables,
    config,
    { enableImplicitConversion: true },
  );

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    console.error(errors.toString());
    throw new Error('Environment validation error');
  }

  return validatedConfig;
}