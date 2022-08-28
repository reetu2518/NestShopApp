import { HttpException } from "@nestjs/common";

/**
 * Custom not null Exception Class
 */
export class NotNullException extends HttpException{
    constructor(message){
        super(message, 705);
    }
}