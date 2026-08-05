import type { INodeProperties } from 'n8n-workflow';

export function isChatInstance(value: unknown): boolean {
    if (typeof value !== 'object' || value === null) return false;
    const candidate = value as { invoke?: unknown; call?: unknown };
    return typeof candidate.invoke === 'function' || typeof candidate.call === 'function';
}

export function getBatchingOptionFields(
    _displayOptions?: unknown,
    defaultBatchSize = 1,
): INodeProperties {
    return {
        displayName: 'Batching',
        name: 'batching',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: false,
        },
        default: {},
        placeholder: 'Add Batching',
        options: [
            {
                displayName: 'Settings',
                name: 'settings',
                values: [
                    {
                        displayName: 'Batch Size',
                        name: 'batchSize',
                        type: 'number',
                        default: defaultBatchSize,
                        typeOptions: { minValue: 1 },
                        description: 'How many items to process in each batch',
                    },
                    {
                        displayName: 'Delay Between Batches (Ms)',
                        name: 'delayBetweenBatches',
                        type: 'number',
                        default: 0,
                        typeOptions: { minValue: 0 },
                        description: 'Milliseconds to wait between batches',
                    },
                ],
            },
        ],
    };
}
