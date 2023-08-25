export class AppError extends Error {
    statusCode: number;

    constructor ( public message: string, statusCode: number = 400 ) {
        super(message);
        this.statusCode = statusCode;
    }
}