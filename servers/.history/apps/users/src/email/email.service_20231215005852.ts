import { Injectable } from "@nestjs/common"

type mailOptions = {
	subject: string
	email: string
	name: string
	activationCode: number
	template: string
}
@Injectable()
export class EmailService {
    constructor
}
