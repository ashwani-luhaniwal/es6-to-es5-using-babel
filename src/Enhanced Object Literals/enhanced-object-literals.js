
/* Object literals are extended to support setting the prototype at construction,
 * shorthand for foo: foo assignments, defining methods, making super calls, and
 * computing property names with expressions. Together, these also bring object
 * literals and class declarations closer together, and let object-based design
 * benefit from some of the same conveniences. */

var obj = {
	// __proto__
	__proto__: theProtoObj,
	// Shorthand for 'handler: handler'
	handler,
	// Methods
	toString() {
		// Super calls
		return "d " + super.toString();
	},
	// Computed (dynamic) property names
	[ 'prop_' + (() => 42)() ]: 42
};
