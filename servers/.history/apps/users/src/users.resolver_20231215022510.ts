import { Args, Mutation, Resolver, Query, Context } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { RegisterResponse } from "./types/users.types";
import { ActivationDto, RegisterDto } from "./dto/user.dto";
import { BadGatewayException } from "@nestjs/common";
import { User } from "./entities/user.entity";

@Resolver("User")
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args("registerInput") registerDto: RegisterDto,
    @Context() context: { res: Response }
  ): Promise<RegisterResponse> {
    if (!registerDto.email || !registerDto.name || !registerDto.password) {
      throw new BadGatewayException("Please fill the all fields.");
    }

    const user = await this.userService.register(registerDto, context.res);

    return { user };
  }

  @Mutation(() => RegisterResponse)
  async activateUser(
    @Args('activationInput') activationDto: ActivationDto,
    
  )
}
