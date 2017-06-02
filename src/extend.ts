/**
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-06-02 11:46:25
* @CopyRight			飞道科技
*/
import _mixin from './_mixin';

/**
* @module lodash-ts/extend
* @example
* import extend from 'lodash-ts/extend';
* let obj1 = {};
* let obj2 = {foo: 'bar'};
* let obj3 = {bar: 'foo'};
* let obj = extend(obj1, obj2, obj3);
* console.info(obj);	// {foo: 'bar', bar: 'foo'}
 * @see _.extend
*/


/**
 * Copies the values of all enumerable (own or inherited) properties of one or more source objects to the
 * target object.
 *
 * @return The modified target object
 */
export default function extend<T0 extends {}, T1 extends {}>(s0: T0, s1: T1): T0 & T1;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}>(s0: T0, s1: T1, s2: T2): T0 & T1 & T2;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3): T0 & T1 & T2 & T3;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4): T0 & T1 & T2 & T3 & T4;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5): T0 & T1 & T2 & T3 & T4 & T5;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6): T0 & T1 & T2 & T3 & T4 & T5 & T6;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}, T8 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7, s8: T8): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}, T8 extends {}, T9 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7, s8: T8, s9: T9): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}, T8 extends {}, T9 extends {}, T10 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7, s8: T8, s9: T9, s10: T10): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}, T8 extends {}, T9 extends {}, T10 extends {}, T11 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7, s8: T8, s9: T9, s10: T10, s11: T11): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}, T8 extends {}, T9 extends {}, T10 extends {}, T11 extends {}, T12 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7, s8: T8, s9: T9, s10: T10, s11: T11, s12: T12): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11 & T12;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}, T8 extends {}, T9 extends {}, T10 extends {}, T11 extends {}, T12 extends {}, T13 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7, s8: T8, s9: T9, s10: T10, s11: T11, s12: T12, s13: T13): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11 & T12 & T13;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}, T8 extends {}, T9 extends {}, T10 extends {}, T11 extends {}, T12 extends {}, T13 extends {}, T14 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7, s8: T8, s9: T9, s10: T10, s11: T11, s12: T12, s13: T13, s14: T14): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11 & T12 & T13 & T14;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}, T8 extends {}, T9 extends {}, T10 extends {}, T11 extends {}, T12 extends {}, T13 extends {}, T14 extends {}, T15 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7, s8: T8, s9: T9, s10: T10, s11: T11, s12: T12, s13: T13, s14: T14, s15: T15): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11 & T12 & T13 & T14 & T15;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}, T8 extends {}, T9 extends {}, T10 extends {}, T11 extends {}, T12 extends {}, T13 extends {}, T14 extends {}, T15 extends {}, T16 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7, s8: T8, s9: T9, s10: T10, s11: T11, s12: T12, s13: T13, s14: T14, s15: T15, s16: T16): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11 & T12 & T13 & T14 & T15 & T16;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}, T8 extends {}, T9 extends {}, T10 extends {}, T11 extends {}, T12 extends {}, T13 extends {}, T14 extends {}, T15 extends {}, T16 extends {}, T17 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7, s8: T8, s9: T9, s10: T10, s11: T11, s12: T12, s13: T13, s14: T14, s15: T15, s16: T16, s17: T17): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11 & T12 & T13 & T14 & T15 & T16 & T17;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}, T8 extends {}, T9 extends {}, T10 extends {}, T11 extends {}, T12 extends {}, T13 extends {}, T14 extends {}, T15 extends {}, T16 extends {}, T17 extends {}, T18 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7, s8: T8, s9: T9, s10: T10, s11: T11, s12: T12, s13: T13, s14: T14, s15: T15, s16: T16, s17: T17, s18: T18): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11 & T12 & T13 & T14 & T15 & T16 & T17 & T18;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}, T8 extends {}, T9 extends {}, T10 extends {}, T11 extends {}, T12 extends {}, T13 extends {}, T14 extends {}, T15 extends {}, T16 extends {}, T17 extends {}, T18 extends {}, T19 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7, s8: T8, s9: T9, s10: T10, s11: T11, s12: T12, s13: T13, s14: T14, s15: T15, s16: T16, s17: T17, s18: T18, s19: T19): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11 & T12 & T13 & T14 & T15 & T16 & T17 & T18 & T19;
export default function extend<T0 extends {}, T1 extends {}, T2 extends {}, T3 extends {}, T4 extends {}, T5 extends {}, T6 extends {}, T7 extends {}, T8 extends {}, T9 extends {}, T10 extends {}, T11 extends {}, T12 extends {}, T13 extends {}, T14 extends {}, T15 extends {}, T16 extends {}, T17 extends {}, T18 extends {}, T19 extends {}, T20 extends {}>(s0: T0, s1: T1, s2: T2, s3: T3, s4: T4, s5: T5, s6: T6, s7: T7, s8: T8, s9: T9, s10: T10, s11: T11, s12: T12, s13: T13, s14: T14, s15: T15, s16: T16, s17: T17, s18: T18, s19: T19, s20: T20): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9 & T10 & T11 & T12 & T13 & T14 & T15 & T16 & T17 & T18 & T19 & T20;
export default function extend(target: any, ...sources: any[]): any;
export default function extend(target: any, ...sources: any[]): any {
	return _mixin({
		deep: false,
		inherited: true,
		sources: sources,
		target: target
	});
}
