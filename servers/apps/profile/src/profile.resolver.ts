import { Args, Query, Resolver } from "@nestjs/graphql";
import { ProfileService } from "./profile.service";
import { UserProfile } from "./entities/profile.entitie";
import { ProfileDTO } from "./dto/profile.dto";
import { UseGuards } from "@nestjs/common";

@Resolver("Profile")
export class ProfileResolver {
  constructor(private profileServie: ProfileService) {}

  @Query(() => UserProfile)
  async profile(@Args("userName") userName: string) {
    return await this.profileServie.getProfile(userName);
  }

  // @UseGuards(AuthGuard)
  // async getSettings(@Args('userName') userName: string) {
  //   return await this.profileServie.getSettings(userName);
  // }

  // @UseGuards(AuthGuard)
  // async updateSettings(@Args('userName') settings: object) {
  //   return await this.profileServie.updateSettings(settings);
  // }
}
