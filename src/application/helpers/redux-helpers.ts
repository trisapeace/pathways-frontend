export const makeAction = <T>(type: string, payload: T): { readonly type: string, readonly payload: T } => (
    {
        type,
        payload,
    }
);

export const makeActionWithoutPayload = (type: string): { readonly type: string } => (
    {
        type
    }
);
