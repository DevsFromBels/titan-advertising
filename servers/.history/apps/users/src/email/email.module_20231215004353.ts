import { Global, Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';


@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({

    })
  ]
  providers: [EmailService]
})
export class EmailModule {}
