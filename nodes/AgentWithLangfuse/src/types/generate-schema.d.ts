declare module 'generate-schema' {
    export type SchemaObject = {
        type?: string;
        properties?: Record<string, unknown>;
        items?: unknown;
        required?: string[];
        [key: string]: unknown;
    };

    export function json(name: string, value: unknown): SchemaObject;
    export function json(value: unknown): SchemaObject;
}
