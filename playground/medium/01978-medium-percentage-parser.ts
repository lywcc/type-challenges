/*
  1978 - Percentage Parser
  -------
  by SSShuai1999 (@SSShuai1999) #medium #template-literal

  ### Question

  Implement PercentageParser<T extends string>.
  According to the `/^(\+|\-)?(\d*)?(\%)?$/` regularity to match T and get three matches.

  The structure should be: [`plus or minus`, `number`, `unit`]
  If it is not captured, the default is an empty string.

  For example:

  ```ts
  type PString1 = ""
  type PString2 = "+85%"
  type PString3 = "-85%"
  type PString4 = "85%"
  type PString5 = "85"

  type R1 = PercentageParser<PString1> // expected ['', '', '']
  type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
  type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
  type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
  type R5 = PercentageParser<PString5> // expected ["", "85", ""]
  ```

  > View on GitHub: https://tsch.js.org/1978
*/

/* _____________ Your Code Here _____________ */

// 方式1

// type PercentageParser<A extends string > = A extends `${infer F}${infer R}%` ?
//   F extends '+' | '-' ? [F, R, '%'] : ['', `${F}${R}`, '%'] :
//   A extends `${infer F}%` ? ['', `${F}`, '%']
//     : A extends `${infer F}${infer R}` ? F extends '+' | '-' ? [F, R, ''] : ['', `${F}${R}`, ''] :
//         ['', '', '']

// 方式2

type A = '' extends `${infer F}${string}` ? true : false // false
type B = ' ' extends `${infer F}${string}` ? true : false // true

// 解析符号部分
type ParseSign<S extends string> = S extends `${infer F}${string}` ? F extends '+' | '-' ? F : '' : ''
// 解析%部分
type ParsePercent<S extends string> = S extends `${string}%` ? '%' : ''

// 解析中间部分

type ParseNumber<S extends string> = S extends `${infer F}${infer R}` ?
  F extends '+' | '-' ? R extends `${infer N}%` ? N : R : S extends `${infer N}%` ? N : S
  : ''

// 组合三个部分

type PercentageParser<S extends string> = [ParseSign<S>, ParseNumber<S>, ParsePercent<S>]

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Case0 = ['', '', '']
type Case1 = ['+', '', '']
type Case2 = ['+', '1', '']
type Case3 = ['+', '100', '']
type Case4 = ['+', '100', '%']
type Case5 = ['', '100', '%']
type Case6 = ['-', '100', '%']
type Case7 = ['-', '100', '']
type Case8 = ['-', '1', '']
type Case9 = ['', '', '%']
type Case10 = ['', '1', '']
type Case11 = ['', '100', '']

type cases = [
  Expect<Equal<PercentageParser<''>, Case0>>,
  Expect<Equal<PercentageParser<'+'>, Case1>>,
  Expect<Equal<PercentageParser<'+1'>, Case2>>,
  Expect<Equal<PercentageParser<'+100'>, Case3>>,
  Expect<Equal<PercentageParser<'+100%'>, Case4>>,
  Expect<Equal<PercentageParser<'100%'>, Case5>>,
  Expect<Equal<PercentageParser<'-100%'>, Case6>>,
  Expect<Equal<PercentageParser<'-100'>, Case7>>,
  Expect<Equal<PercentageParser<'-1'>, Case8>>,
  Expect<Equal<PercentageParser<'%'>, Case9>>,
  Expect<Equal<PercentageParser<'1'>, Case10>>,
  Expect<Equal<PercentageParser<'100'>, Case11>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1978/answer
  > View solutions: https://tsch.js.org/1978/solutions
  > More Challenges: https://tsch.js.org
*/
