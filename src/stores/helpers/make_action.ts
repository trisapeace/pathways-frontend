export interface Action<T extends string> { type: T; }
export interface ActionWithPayload<T extends string, P> { type: T; payload: P; }

export function makeAction<T extends string>(type: T): Action<T>;
export function makeAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function makeAction<T extends string, P>(type: T, payload?: P): Action<T> | ActionWithPayload<T, P> {
    return payload === undefined ? { type } : { type, payload };
}
