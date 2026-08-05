import type { INodeProperties } from 'n8n-workflow';

export const autoSaveHighlightedDataProperty: INodeProperties = {
    displayName: 'Auto Save Highlighted Data',
    name: 'autoSaveHighlightedData',
    type: 'boolean',
    default: true,
    description: 'Whether to save the first output text to highlighted data',
};
