import type { EngineRequest } from 'n8n-workflow';

export function isEngineRequest<TMetadata = unknown>(
    value: unknown,
): value is EngineRequest<TMetadata> {
    if (typeof value !== 'object' || value === null) return false;
    return Array.isArray((value as { actions?: unknown }).actions);
}
