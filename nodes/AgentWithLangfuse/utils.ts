import type { IExecuteFunctions, ISupplyDataFunctions } from 'n8n-workflow';

export function isExecuteFunctions(
    ctx: IExecuteFunctions | ISupplyDataFunctions,
): ctx is IExecuteFunctions {
    return 'continueOnFail' in ctx && typeof (ctx as IExecuteFunctions).continueOnFail === 'function';
}
