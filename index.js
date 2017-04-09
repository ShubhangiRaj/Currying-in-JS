//  writing a simple function to greet somebody by name
var greet = function(greeting, name) {
  	console.log(greeting + ", " + name);
};
greet("Hello", "Jake"); //"Hello, Jake"

// our first curry
var greetCurried = function(greeting) {
  	return function(name) {
    	console.log(greeting + ", " + name);
  	};
};

// calling the obove function
var greetHello = greetCurried("Hello");
greetHello("Jack"); //"Hello, Jack"
greetHello("Tom"); //"Hello, Tom"

// can also call the original curried function directly
greetCurried("Hi there")("Howard"); //"Hi there, Howard"
greetCurried("Sup")("Emma"); //"Sup, Emma"

// implementing a much deeper curry
var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};

var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
greetAwkwardly("Heidi"); // "Hello...Heidi?"

var sayHello = greetDeeplyCurried("Hello")(", ");
sayHello(".")("Heidi"); //"Hello, Heidi."

var askHello = sayHello("?");
askHello("Heidi"); // Hello, Heidi?