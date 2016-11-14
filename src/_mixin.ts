const hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Type guard that ensures that the value can be coerced to Object
 * to weed out host objects that do not derive from Object.
 * This function is used to check if we want to deep copy an object or not.
 * Note: In ES6 it is possible to modify an object's Symbol.toStringTag property, which will
 * change the value returned by `toString`. This is a rare edge case that is difficult to handle,
 * so it is not handled here.
 * @param  value The value to check
 * @return       If the value is coercible into an Object
 */
function shouldDeepCopyObject(value: any): value is Object {
	return Object.prototype.toString.call(value) === '[object Object]';
}

export function copyArray<T>(array: T[], inherited: boolean, deep = true): T[] {
	const newArr: T[] = [];
	const l = array && array.length;
	for (let i = 0; i < l; ++i) {
		const item = array[i];
		if (Array.isArray(item)) {
			newArr.push(copyArray(item as any as T[], inherited, deep) as any as T);
		} else {
			newArr.push(!shouldDeepCopyObject(item) ?
				item :
				_mixin({
					deep: deep,
					inherited: inherited,
					sources: <Array<T>>[item],
					target: <T>{}
				}));
		}
	}
	return newArr;
}

export interface MixinArgs<T extends {}, U extends {}> {
	deep: boolean;
	inherited: boolean;
	// sources: (U | null | undefined)[];
	sources: U[];
	target: T;
}

export default function _mixin<T extends {}, U extends {}>(kwArgs: MixinArgs<T, U>): T & U {
	const deep = kwArgs.deep;
	const inherited = kwArgs.inherited;
	const target = kwArgs.target;

	for (let source of kwArgs.sources) {
		if (source === null || source === undefined) {
			continue;
		}
		for (let key in source) {
			if (inherited || hasOwnProperty.call(source, key)) {
				let value: any = (<any>source)[key];

				if (deep) {
					if (Array.isArray(value)) {
						value = copyArray(value, inherited);
					}
					else if (shouldDeepCopyObject(value)) {
						value = _mixin({
							deep: true,
							inherited: inherited,
							sources: <U[]>[value],
							target: {}
						});
					}
				}

				(<any>target)[key] = value;
			}
		}
	}

	return <T & U>target;
}
