export const toFixed2 = (value: number): number => Math.round(value * 100) / 100;

export const nowIso = (): string => new Date().toISOString();
