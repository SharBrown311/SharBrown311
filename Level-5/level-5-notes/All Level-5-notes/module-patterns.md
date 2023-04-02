# JS MODULE PATTERN
  -There are a few different common patterns that are used to set up the structure of your modules in Node.js. We'll be discussing 5 such common patterns.

One of the main things to know/remember, which will help you immensely as you're trying to understand these different patterns, is that whatever you set `module.exports` equal to in one file is the thing that will get pulled in when you `require()` from another file.
  # **1. Set `module.exports` equal to a function**

You can set module.exports equal to a function (anonymous function expression OR a named function). When you require that module, what you pull in with `require()` is a function which you can then invoke (call) like normal.

### **Example 1 - exporting an anonymous function expression:**

// greet1.js

module.exports = function() {
    console.log("Hello world");
}

// app.js

const greet = require("./greet1");
greet();

### Example 2 - exporting a named function:

// greet1.js

function greeting() {
    console.log("Hello world");
}

// notice we don't execute the function, but just pass it as a variable
module.exports = greeting;  // NOT greeting()

// app.js

const greet = require("./greet1");
greet();


# **2. Add function expressions as properties on `module.exports`**

If you do it this way, you'll need to specify the property you want when you require the module:

// greet2.js

module.exports.greet = function() {
    console.log("Hello world!");
}


// app.js

// Either do:
var greet2 = require("./greet2"); // Returns module.exports, which contains a "greet" property on it
greet2.greet();

// Or:
var greet2 = require("./greet2").greet; // Returns just the greet property of module.exports
greet2();


# **3. Set `module.exports` to an object of your own with its own properties**

This is very similar to #2 in that it exports an object with the properties set to the functions in your module you want to export.

This pattern is also known as the "Revealing Module Pattern" because it allows you to expose only the things you want to expose in your module. You may decide to run a bunch of logic, have helper functions, etc. all to come to a final result, and then only expose that final result when the `require()` function is run.


// greet3.js

var greeting = "Hello world!!!!";

function greet() {
    console.log(greeting);
}


// Replace module.exports object with my own object that just contains the one
// function. Even though I'm only exposing the one greet function, it still has
// access to all the other functions, login, variables, etc. within this file.
// This way, I can make it so I'm only exposing that which I want to expose
// when require() is called.
module.exports = {
    greet: greet
}


// app.js

var greet3 = require("./greet3");
greet3.greet();


4. Set module.exports equal to a function constructor
// greet4.js
function Greetr() {
    this.greeting = "Hello world!!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;


// app.js

var Greet4 = require("./greet4");
var greetr = new Greet4();
greetr.greet();


There is no "right" or "wrong" way to structure your modules, it's all about using the right tool for the job. You need to make sure the structure makes sense for what you're wanting to use it for, and gaining that understanding will come with time. For now, play around with different module styles and see which ones make the most sense to you.