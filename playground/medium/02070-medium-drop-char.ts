/*
  2070 - Drop Char
  -------
  by CaptainOfPhB (@CaptainOfPhB) #medium #template-literal #infer

  ### Question

  Drop a specified char from a string.

  For example:

  ```ts
  type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
  ```

  > View on GitHub: https://tsch.js.org/2070
*/

/* _____________ Your Code Here _____________ */

 type A = ' ' extends '' ? true : false

// type DropChar<S extends string, C extends string> = S extends `${infer F}${infer Rest}` ?
//   F extends C ?  `${DropChar<Rest, C>}`  : `${F}${DropChar<Rest, C>}`
//   : ''

type DropChar<S extends string, C extends string, R extends string = ''> = S extends `${infer F}${infer Rest}` ? F extends C ? `${DropChar<Rest, C, `${R}`>}` : `${DropChar<Rest, C, `${R}${F}`>}` : R

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2070/answer
  > View solutions: https://tsch.js.org/2070/solutions
  > More Challenges: https://tsch.js.org
*/
