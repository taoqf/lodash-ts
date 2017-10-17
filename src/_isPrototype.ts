/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:23
* @CopyRight			飞道科技
*/
/** Used for built-in method references. */
const objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
export default function isPrototype(value: any) {
	const Ctor = value && value.constructor,
		proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	return value === proto;
}
