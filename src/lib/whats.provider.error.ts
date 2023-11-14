export class ProviderError extends Error {
    readonly code: string
    readonly statusCode: number;
    readonly errors: string[];

    constructor(code?: string, statusCode?: number, message?: string, errors?: string[]) {
        super(message);
        this.name = 'ProviderError';
        this.code = code;
        this.statusCode = statusCode;
        this.errors = errors;
    }

    static of(args: { code?: string, statusCode?: number, message?: string, errors?: string[] }): ProviderError {
        return new ProviderError(
            args.code,
            args.statusCode,
            args.message,
            args.errors
        )
    }
}