import { Injectable } from '@nestjs/common';

type mailOptions = {
    subject: string;
    email:string;
    name:string;
    activationCode: number;
    tem
}
@Injectable()
export class EmailService {}
