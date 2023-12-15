import { Injectable } from '@nestjs/common';

type mailOptions = {
    subject: string;
    email:string;
    name:string;
    ac
}
@Injectable()
export class EmailService {}
