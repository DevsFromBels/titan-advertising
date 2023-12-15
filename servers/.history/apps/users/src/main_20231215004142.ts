import { NestFactory } from "@nestjs/core"
import { UsersModule } from "./users.module"
import { NestExpressApplication } from "@nestjs/platform-express"
import { join } from "path"

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(UsersModule)

	app.useStaticAssets(join(__dirname, "..", "public"))
  app.setBaseViewsDir(join(__dirname, '..', 'servers/'))
	await app.listen(4001)
}
bootstrap()
