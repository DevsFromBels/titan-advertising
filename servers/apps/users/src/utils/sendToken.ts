import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";

export class TokenSender {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwt: JwtService,
  ) {}

  public sendToken(user: User) {
    const accessToken = this.jwt.sign(
      {
        id: user.id,
      },
      {
        secret: this.configService.get<string>("ACCESS_TOKEN_SECRET"),
      },
    );

    const refreshToken = this.jwt.sign(
      {
        id: user.id,
      },
      {
        secret: this.configService.get<string>("REFRESH_TOKEN_SECRET"),
        expiresIn: "7d",
      },
    );
    return { user, accessToken, refreshToken };
  }
}
