import { Args, Mutation, Resolver, Query, Context } from "@nestjs/graphql"
import { UsersService } from "./users.service"
import { RegisterResponse } from "./types/users.types"
import { ActivationDto, RegisterDto } from "./dto/user.dto"
import { BadGatewayException, BadRequestException } from "@nestjs/common"
import { User } from "./entities/user.entity"

@Resolver("User")
export class UsersResolver {
	constructor(private readonly userService: UsersService) {}

	@Mutation(() => RegisterResponse)
	async register(
		@Args("registerInput") registerDto: RegisterDto,
		@Context() context: { res: Response }
	): Promise<RegisterResponse> {
		if (!registerDto.email || !registerDto.name || !registerDto.password) {
			throw new BadRequestException("Please fill the all fields.")
		}

		const { activation_token } = await this.userService.register(registerDto, context.res)

		return { activation_token }
	}

	@Mutation(() => ActivationResponse)
	async activateUser(
		@Args("activationInput") activationDto: ActivationDto,
		@Context() context: { res: Response }
	): Promise<RegisterResponse> {

		return await this.userService.actiivateUser(
			activationDto,
			context.res
		)
	}
}
