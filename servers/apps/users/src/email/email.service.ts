import { MailerService } from "@nestjs-modules/mailer"
import { Injectable } from "@nestjs/common"

type mailOptions = {
	subject: string
	email: string
	name: string
	activationCode: string
	template: string
}

@Injectable()
export class EmailService {
	constructor(private mailSevice: MailerService) {}
	async sendMail({
		subject,
		email,
		name,
		activationCode,
		template,
	}: mailOptions) {
		await this.mailSevice.sendMail({
			to: email,
			subject,
			template,
			context: {
				name,
				activationCode,
			},
		})
	}
}
