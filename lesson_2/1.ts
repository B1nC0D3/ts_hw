type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

// condition types to get it
type GetElementType<A, K extends keyof A> = A[K];


type elem1 = GetElementType<arr1, 0>; // elem1 имеет тип 'a'
type elem2 = GetElementType<arr2, 2>; // elem2 имеет тип 1
