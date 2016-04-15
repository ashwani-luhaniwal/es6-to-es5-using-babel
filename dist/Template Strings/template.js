"use strict";

var _templateObject = _taggedTemplateLiteral(["In JavaScript this is\nnot legal."], ["In JavaScript this is\nnot legal."]),
    _templateObject2 = _taggedTemplateLiteral(["http://foo.org/bar?a=", "&b=", "\n\t  Content-Type: application/json\n\t  X-Credentials: ", "\n\t  { \"foo\": ", ",\n\t\t\"bar\": ", " }"], ["http://foo.org/bar?a=", "&b=", "\n\t  Content-Type: application/json\n\t  X-Credentials: ", "\n\t  { \"foo\": ", ",\n\t\t\"bar\": ", " }"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* Template strings provide syntactic sugar for constructing strings. This is similar
 * to string interpolation features in Perl, Python and more. Optionally, a tag can be
 * added to allow the string construction to be customized, avoiding injection attacks
 * or constructing higher level data structures from string contents. */

// Basic literal string creation
"In JavaScript '\n' is a line-feed."

// Multiline strings
(_templateObject);

// String interpolation
var name = "Bob",
    time = "today";
"Hello " + name + ", how are you " + time + "?";

// Construct an http request prefix is used to interpret the replacements and construction
POST(_templateObject2, a, b, credentials, foo, bar)(myOnReadyStateChangeHandler);