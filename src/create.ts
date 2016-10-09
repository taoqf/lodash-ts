import assign from './assign';

/**
 * Creates a new object from the given prototype, and copies all enumerable own properties of one or more
 * source objects to the newly created target object.
 *
 * @param prototype The prototype to create a new object from
 * @param mixins Any number of objects whose enumerable own properties will be copied to the created object
 * @return The new object
 */
export function create<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}, Y extends {}, Z extends {}>(prototype: T, mixin1: U, mixin2: V, mixin3: W, mixin4: X, mixin5: Y, mixin6: Z): T & U & V & W & X & Y & Z;
export function create<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}, Y extends {}>(prototype: T, mixin1: U, mixin2: V, mixin3: W, mixin4: X, mixin5: Y): T & U & V & W & X & Y;
export function create<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}>(prototype: T, mixin1: U, mixin2: V, mixin3: W, mixin4: X): T & U & V & W & X;
export function create<T extends {}, U extends {}, V extends {}, W extends {}>(prototype: T, mixin1: U, mixin2: V, mixin3: W): T & U & V & W;
export function create<T extends {}, U extends {}, V extends {}>(prototype: T, mixin1: U, mixin2: V): T & U & V;
export function create<T extends {}, U extends {}>(prototype: T, mixin: U): T & U;
export function create<T extends {}>(prototype: T): T;
export function create(prototype: any, ...mixins: any[]): any {
	if (!mixins.length) {
		throw new RangeError('create requires at least one mixin object.');
	}

	const args = mixins.slice();
	args.unshift(Object.create(prototype));

	return assign.apply(null, args);
}

export default create;
