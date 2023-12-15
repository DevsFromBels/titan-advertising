import { Injectable } from '@nestjs/common';

type mailOptions = {
    subject: string;
    email:string;
    name:string;
    activation
}
@Injectable()
export class EmailService {}
