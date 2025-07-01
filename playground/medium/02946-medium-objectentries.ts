/*
  2946 - ObjectEntries
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  Implement the type version of ```Object.entries```

  For example

  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
  ```

  > View on GitHub: https://tsch.js.org/2946
*/

/* _____________ Your Code Here _____________ */

// type F = undefined extends undefined ? 1 : 2

// type Obj = { name?: undefined }
// type Obj1 = Required<Obj> // {name: never}

// type MyRequired<O extends object> = {
//   [K in keyof O]-?: O[K] extends undefined ? undefined : O[K]
// }

// type Obj2 = MyRequired<Obj> // {name: never}

// TODO 为啥不能过 {name: never}
// type ObjectEntries<T extends object> = keyof T extends infer K ?
//   K extends keyof T ? {} extends Pick<T, K> ? T[K] extends undefined ? [K, T[K]] : [K, Required<T>[K]] : [K, T[K]] : never
//   : never

type ObjectEntries<T extends object> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? T[K] extends undefined ? [K, T[K]] : [K, Required<T>[K]] : [K, T[K]]
}[keyof T]

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type A1 = ObjectEntries<{ key?: undefined }>

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: string | undefined }>, ['key', string | undefined]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2946/answer
  > View solutions: https://tsch.js.org/2946/solutions
  > More Challenges: https://tsch.js.org
*/
