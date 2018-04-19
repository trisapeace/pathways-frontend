export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;
export type CategoryAction = {
    readonly type: string,
    readonly payload: {
        readonly category: number,
    },
};

export const setCategory = (category: number): CategoryAction => ({
    type: 'USER',
    payload: {
        category,
    },
});

// tslint:disable-next-line:typedef
const buildDefaultStore = () => (
    { category: 1 }
);

export const reducer = (store: Store = buildDefaultStore(), action?: CategoryAction): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case 'USER':
            return { ...store, category: action.payload.category };
        default:
            return store;
    }
};
