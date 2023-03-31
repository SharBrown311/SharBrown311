# Server Side Programming(in node with Express): 


# Frontend: What the user sees and interacts with 

# Backend: The Server and the Database that the client interacts with. 

# Servers: Receives request from a Client or other server, and sends back a response.

# API: The program interface that takes and fulfills the server's request so the server can send a response. 

# Database: Stores data for the application. 



The Client makes a request
Front-end
CLIENT >>>>>>>>>SERVER>>>>>DATABASE

         https://youtu.be/90jb9FJEi9Q

         Node is a powerful tool that allows Javascript to be interpreted *outside* of the browser - most importantly, it allows Javascript to be used as a server-side language.

What does this mean?

Traditionally we used a backend language (like Python, Ruby, C#, Go, etc.) to retrieve and control the data from the database. It was then passed to the *front end* where JavaScript (and the browser) would take over displaying the information to the end user. Thus nearly every *back end* programmer had to know JavaScript *and* some other language.

Javascript was made to use in the browser, but Node changed that. A programmer could use Javascript on the *front end* to display the information **AND** use Javascript, with Node, on the *back end* to get and manipulate data from the data base.

Node has a vast community of contributors and a large amount of packages available via the Node Package Manager (NPM). Node is one of the most contributed to programs in the world.

### **Background**

Node was built on top of the JavaScript V8 Engine, which was developed by Google to run JavaScript code in the Google Chrome browser. The V8 Engine is widely considered the best JavaScript engine available out there.

Through an initiative in the open source community, the power of the V8 engine was brought to the command line by the creation of Node.js. Node.js is free and open-source, comes with its own extensive API for interacting with your machine (instead of just a browser window), and thus allows developers to build a server entirely in JavaScript. Before node.js, servers needed to be written in languages that were already built to interact with machine code such as C#, Java, Python, or Ruby (amongst many others). Now a developer can write both server-side and client-side code entirely in JavaScript!

There are certain requirements we need in a system in order to create a web server:

- Better ways to organize our code into reusable pieces
- Ways to deal with files
- Ways to deal with databases
- Ability to communicate over the internet
- Ability to accept requests and send responses (in a consistent and standard way)
- Way to deal with work that takes a long time

The creators of Node.js added APIs that allow it to accomplish all of the above requirements. The full API documentation can be found at [nodejs.org/api/](https://nodejs.org/api/). Any aspiring Node.js developer should read through the Node.js documentation extensively to become familiar with the tools that are available at your disposal.