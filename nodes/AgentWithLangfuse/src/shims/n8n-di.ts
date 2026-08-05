type Constructor<T> = new (...args: unknown[]) => T;

export const Container = {
    get<T>(ctor: Constructor<T> | undefined): T | undefined {
        if (!ctor) return undefined;
        try {
            return new ctor();
        } catch {
            return undefined;
        }
    },
};
