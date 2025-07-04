/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal

  ### Question

  Replace the `camelCase` or `PascalCase` string with `kebab-case`.

  `FooBarBaz` -> `foo-bar-baz`

  For example

  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">
  const foobarbaz: FooBarBaz = "foo-bar-baz"

  type DoNothing = KebabCase<"do-nothing">
  const doNothing: DoNothing = "do-nothing"
  ```

  > View on GitHub: https://tsch.js.org/612
*/

/* _____________ Your Code Here _____________ */
// type UppercaseLetters =
//   'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' |
//   'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' |
//   'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'

// type KebabCase<S extends string, Flag extends boolean = true> = S extends `${infer F}${infer Rest}` ? F extends UppercaseLetters ? Flag extends true ? `${Lowercase<F>}${KebabCase<Rest, false>}` : `-${Lowercase<F>}${KebabCase<Rest, false>}`
//   : `${F}${KebabCase<Rest, false>}`
//   : S
type KebabCase<S extends string, Flag extends boolean = true> =
  S extends `${infer F}${infer Rest}` ?
    F extends Uppercase<F>
      ? F extends Lowercase<F> // 排除 - 这些非字母字符的干扰
        ? `${F}${KebabCase<Rest, false>}`
        : Flag extends true
          ? `${Lowercase<F>}${KebabCase<Rest, false>}`
          : `-${Lowercase<F>}${KebabCase<Rest, false>}`
      : `${F}${KebabCase<Rest, false>}`
    : S

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/612/answer
  > View solutions: https://tsch.js.org/612/solutions
  > More Challenges: https://tsch.js.org
*/
