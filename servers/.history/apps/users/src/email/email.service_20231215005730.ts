import { Injectable } from '@nestjs/common';

type mailOptions = {
    subject: string;
    email:string;
    
}
@Injectable()
export class EmailService {}
