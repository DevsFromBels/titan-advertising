import { BadRequestException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService, JwtVerifyOptions } from "@nestjs/jwt";
import { PrismaService } from "../../../prisma/prisma.service";
import { ActivationDto, LoginDto, RegisterDto } from "./dto/user.dto";
import { EmailService } from "./email/email.service";
import * as bcrypt from "bcrypt";
import { TokenSender } from "./utils/sendToken";

interface UserData {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly emailService: EmailService,
  ) {}

  async register(registerDto: RegisterDto, response: Response) {
    const { name, email, password } = registerDto;
    const id = name.toLowerCase().trim();
    const createdAt = new Date();

    const isEmailExists = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isEmailExists) {
      throw new BadRequestException("User allready exists with this email");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      id,
      name,
      password: hashedPassword,
      email,
      createdAt,
    };

    const activationToken = await this.createActivationToken(user);

    const activationCode = activationToken.activationCode;

    const activation_token = activationToken.token;

    await this.emailService.sendMail({
      email,
      subject: "Activate your account!",
      template: "./activation-mail",
      name,
      activationCode,
    });

    return { activation_token, response };
  }

  async createActivationToken(user: UserData) {
    const activationCode = Math.floor(100000 + Math.random() * 9000).toString();

    const token = this.jwtService.sign(
      {
        user,
        activationCode,
      },
      {
        secret: this.configService.get<string>("ACTIVATION_SECRET"),
        expiresIn: "5m",
      },
    );

    return { token, activationCode };
  }

  async actiivateUser(activationDto: ActivationDto, response: Response) {
    const { activationToken, activationCode } = activationDto;

    const newUser: { user: UserData; activationCode: string } =
      this.jwtService.verify(activationToken, {
        secret: this.configService.get<string>("ACTIVATION_SECRET"),
      } as JwtVerifyOptions) as { user: UserData; activationCode: string };

    if (newUser.activationCode !== activationCode) {
      throw new BadRequestException("Invalid activation code");
    }

    const { name, email, password } = newUser.user;
    const id = name.toLowerCase().trim();
    const createdAt = new Date();

    const existUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existUser) {
      throw new BadRequestException("User already exist with this email!");
    }

    const user = await this.prisma.user.create({
      data: {
        id,
        name,
        email,
        password,
        createdAt,
      },
    });

    return { user, response };
  }

  async Login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user && (await this.compaprePassword(password, user.password))) {
      const tokeSender = new TokenSender(this.configService, this.jwtService);
      return tokeSender.sendToken(user);
    } else {
      return {
        user: null,
        accessToken: null,
        refreshToken: null,
        error: {
          message: "Inavlid email or password",
        },
      };
    }
  }

  async getLoggedInUser(req: any) {
    const user = req.user;
    const accessToken = req.accesstoken;
    const refreshToken = req.refreshtoken;

    return { user, refreshToken, accessToken };
  }

  async Logout(req: any) {
    req.user = null;
    req.accesstoken = null;
    req.refreshtoken = null;

    return {
      message: "Logged out successfully!",
    };
  }

  async compaprePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
