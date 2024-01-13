import { BadGatewayException, Injectable} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { UserProfile } from './entities/profile.entitie';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}
  
  async getProfile(userId: string): Promise<UserProfile> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
      }
    });
    

    if(!user) {
      throw new BadGatewayException('User not found');
    }

    const profile = await this.prisma.profile.findUnique({
      where: {
        userId: user.id  
      }
    });

    return {
      user: user,
      info: profile.info,
      isPublic: profile.isPublic,
    };
  }

  async getSettings(userName: string) {
    
  }
  
  async updateSettings(settings) {}
}