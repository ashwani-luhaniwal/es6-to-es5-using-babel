
/* Template strings provide syntactic sugar for constructing strings. This is similar
 * to string interpolation features in Perl, Python and more. Optionally, a tag can be
 * added to allow the string construction to be customized, avoiding injection attacks
 * or constructing higher level data structures from string contents. */

// Basic literal string creation
`In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript this is
not legal.`

// String interpolation
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

// Construct an http request prefix is used to interpret the replacements and construction
POST `http://foo.org/bar?a=${a}&b=${b}
	  Content-Type: application/json
	  X-Credentials: ${credentials}
	  { "foo": ${foo},
		"bar": ${bar} }` (myOnReadyStateChangeHandler);
