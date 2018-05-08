export const aNumber = (): number => {
    return 1000 * Math.random();
};

export const anInteger = (): number => {
    return Math.floor(aNumber());
};