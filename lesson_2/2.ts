type CommonProperty<T, U> = {
    [K in keyof T & keyof U]: T[K] | U[K]
}

type A = { a: number; b: string };
type B = { a: string; b: string; c: number };

type C = CommonProperty<A, B>; // C имеет тип {a: string | number, b: string }
