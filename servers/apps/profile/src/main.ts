import { NestFactory } from '@nestjs/core';
import { ProfileModule } from './profile.module';
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(ProfileModule);
  app.enableCors({
    origin: '*', 
    credentials: true 
  });
  await app.listen(4002);
}
bootstrap();
