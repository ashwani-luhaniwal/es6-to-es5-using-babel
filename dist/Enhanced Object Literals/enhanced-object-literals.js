"use strict";

var _obj;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Object literals are extended to support setting the prototype at construction,
 * shorthand for foo: foo assignments, defining methods, making super calls, and
 * computing property names with expressions. Together, these also bring object
 * literals and class declarations closer together, and let object-based design
 * benefit from some of the same conveniences. */

var obj = _obj = _defineProperty({
	// __proto__
	__proto__: theProtoObj,
	// Shorthand for 'handler: handler'
	handler: handler,
	// Methods
	toString: function toString() {
		// Super calls
		return "d " + _get(Object.getPrototypeOf(_obj), "toString", this).call(this);
	}
}, 'prop_' + function () {
	return 42;
}(), 42);