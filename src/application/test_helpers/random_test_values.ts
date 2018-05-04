import * as uuid from 'uuid';

export const aNumber = (): number => {
    return 1000 * Math.random();
};

export const anInteger = (): number => {
    return Math.floor(aNumber());
};

export const aString = (): string => {
    return uuid.v4();
};

export const aBoolean = (): boolean => {
    return Math.random() > 0.5;
};
