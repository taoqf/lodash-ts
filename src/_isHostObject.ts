/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:23
* @CopyRight			飞道科技
*/
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
export default function isHostObject(value: any) {
	// Many host objects are `Object` objects that can coerce to strings
	// despite having improperly defined `toString` methods.
	var result = false;
	if (value != null && typeof value.toString != 'function') {
		try {
			result = !!(value + '');
		} catch (e) { }
	}
	return result;
}
