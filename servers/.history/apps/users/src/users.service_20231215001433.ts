import { BadRequestException, Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { JwtService } from "@nestjs/jwt"
import { PrismaService } from "../../../prisma/prisma.service"
import { LoginDto, RegisterDto } from "./dto/user.dto"


@Injectable()
export class UsersService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly prisma: PrismaService,
		private readonly configService: ConfigService
	) {}

	async register(registerDto: RegisterDto, response: Response) {
		const { name, email, password, phone_number } = registerDto
		const id = name.toLowerCase().trim()
		const createdAt = new Date()

		const isEmailExists = await this.prisma.user.findUnique({
			where: {
				email,
			},
		})

		if (isEmailExists) {
			throw new BadRequestException(
				"User allready exists with this email"
			)
		}

		const isPhoneNumberExists = await this.prisma.user.findUnique({
			where: {
				phone_number,
			},
		})

		if (isPhoneNumberExists) {
			throw new BadRequestException(
				"User allready exists with this phone number"
			)
		}

		const user = await this.prisma.user.create({
			data: {
				id,
				name,
				password,
				email,
				phone_number,
				createdAt,
			},
		})

		return { user, response }
	}

	async Login(loginDto: LoginDto) {
		const { email, password } = loginDto

		const user = {
			email,
			password,
		}

		return user
	}
}
