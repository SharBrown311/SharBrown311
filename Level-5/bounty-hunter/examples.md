
const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("This line is called for every single request into this server, no matter to which endpoint");
    next();
});

app.use("/", (req, res, next) => {
    console.log("This also gets called on every request. There's no reason to specify a mount path of '/' in a .use() block, just omit it entirely.");
    next();
});

app.use("/hot-cross-buns", (req, res, next) => {
    console.log("This will only get called to a request to /hot-cross-buns. The other middleware with no mount path and '/' mount path will also run, since they run on every request");
    next();
});

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`);
});


//bodyparserexamples.js
const express = require("express");
const app = express();

// body-parser helps Express interpret different kinds of Content-Types that come in the body of a request object. So if you ever need to POST or PUT, you'll likely need to use the "body-parser" middleware
const bodyParser = require("body-parser");

// bodyParser.json() parses request bodies with a Content-Type header set to "application/json", meaning it can now read and interpret JSON.
app.use(bodyParser.json());

// bodyParser.urlencoded() parses data that comes in with a Content-Type of application/x-www-form-urlencoded, which is what data comes in as when you use an HTML <form> to submit data. For now, don't worry about the extended option, just plan on always including it here.
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`);
});