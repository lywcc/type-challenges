/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #medium #template-literal

  ### Question

  Compute the length of a string literal, which behaves like `String#length`.

  > View on GitHub: https://tsch.js.org/298
*/

/* _____________ Your Code Here _____________ */

/**这个写法逻辑上是准确的，但是在Ts中，递归有深度限制，这个编译是不通过的，所以通过类似尾递归来进行优化 */
/**
 * 
 * type LengthOfString<S extends string> = (S extends `${infer F}${infer R}` ? [F, ...LengthOfString<R>] : [])['length']
 */


type LengthOfString <S extends string, T extends any[] = []> = S extends `${infer F}${infer R}` ? LengthOfString<R, [...T, F]> : T['length']





/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/298/answer
  > View solutions: https://tsch.js.org/298/solutions
  > More Challenges: https://tsch.js.org
*/
