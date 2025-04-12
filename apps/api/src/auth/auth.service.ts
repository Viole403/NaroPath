import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Role } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.password) {
      throw new UnauthorizedException('This account uses a different sign-in method');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('User account is inactive');
    }

    const { password: _, ...result } = user;
    return result;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      isAdmin: user.isAdmin,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        isAdmin: user.isAdmin,
      },
    };
  }

  async register(registerDto: RegisterDto) {
    const { email, password, name } = registerDto;

    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: Role.USER,
      },
    });

    // Generate JWT token
    const payload: JwtPayload = {
      sub: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
      isAdmin: newUser.isAdmin,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
        isAdmin: newUser.isAdmin,
      },
    };
  }

  async validateOAuthUser(userDetails: { email: string; name?: string; avatar?: string; googleId?: string; appleId?: string }) {
    const { email, name, avatar, googleId, appleId } = userDetails;

    // Check if user already exists
    let user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      // Update OAuth IDs if they don't exist
      if ((googleId && !user.googleId) || (appleId && !user.appleId)) {
        user = await this.prisma.user.update({
          where: { id: user.id },
          data: {
            googleId: googleId || user.googleId,
            appleId: appleId || user.appleId,
            avatar: avatar || user.avatar,
          },
        });
      }
    } else {
      // Create new user
      user = await this.prisma.user.create({
        data: {
          email,
          name,
          avatar,
          googleId,
          appleId,
          role: Role.USER,
          isVerified: true,
        },
      });
    }

    // Generate JWT token
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      isAdmin: user.isAdmin,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        isAdmin: user.isAdmin,
      },
    };
  }
}