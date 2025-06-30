/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math

  ### Question

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */

type DigitMap = {
  '0': '9'
  '1': '0'
  '2': '1'
  '3': '2'
  '4': '3'
  '5': '4'
  '6': '5'
  '7': '6'
  '8': '7'
  '9': '8'
}

type ReverseStr< T extends string, Res extends string = ''> = T extends `${infer F}${infer Rest}` ? `${ReverseStr<Rest, `${F}${Res}`>}` : Res

type GetMinusStr<T extends string> = T extends `${infer F extends keyof DigitMap}${infer R}` ? F extends '0' ? `${DigitMap[F]}${GetMinusStr<R>}` : `${DigitMap[F]}${R}` : T

type ExcludeZero<T extends string> = T extends '0' ? '0' : T extends `0${infer R}` ? ExcludeZero<R> : T

type StringToNumber<T extends string> = T extends `${infer F extends number}` ? F : never

type MinusOne<T extends number> = StringToNumber<ExcludeZero<ReverseStr<GetMinusStr<ReverseStr<`${T}`>>>>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
