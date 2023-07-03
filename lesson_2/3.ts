type MakePropertiesOptional<T> = {[K in keyof T]?: T[K]}

type A = { a: number; b: string };

type B = MakePropertiesOptional<A>; // B имеет тип { a?: number; b?: string }