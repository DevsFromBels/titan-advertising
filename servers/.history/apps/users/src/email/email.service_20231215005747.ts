import { Injectable } from '@nestjs/common';

type mailOptions = {
    subject: string;
    email:string;
    name:string;
    activationCode: number;
}
@Injectable()
export class EmailService {}
