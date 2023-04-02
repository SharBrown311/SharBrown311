# URL Parameters
  -URL parameters are parameters whose values are set dynamically in a pages URL. They are part of the URL route that is being called by the client. When practicing REST in your API structure, you'll usually structure your routes like this: 
      - `GET` to `/noun` returns a list of ALL "noun" items in the database.
      - `GET` to `/noun/<idNumber>` (e.g.: `/noun/12`) returns the ONE object of type "noun" with the id of `<idNumber>`.
      - `POST` to `/noun` adds a new "noun" to the list of all nouns.
      - `PUT` to `/noun/<idNumber>` UPDATES the instance of "noun" with the id of `<idNumber>`.
      - `DELETE` to `/noun/<idNumber>` REMOVES the specified "noun" from the list of all "noun"s.

      EXAMPLES: 
      - `GET` to `/car/make` returns a list of ALL makes in the database.
      - `GET` to `/car/make/12` returns ONE car make with the ID of 12 (let's say it's "Toyota").
      - `POST` to `/car/make` will add a new car make to the list of all makes. You don't make a `POST` to `/make/12`.
      - `PUT` to `/car/make/12` will UPDATE the info on the "Toyota" car make.
      - `DELETE` to `/car/make/12` will REMOVE "Toyota" from the list of car makes.


# Query Strings
  -These are frequently (and confusingly) referred to as url parameters, but they're not the same thing! Query strings should be used for any kind of filtering you're planning on doing on the specified resource. To continue the car make example above, you might have something like this:
    - `GET` request to `/car/make/12/model` returns a list of Toyota car models
    - `GET` request to `/car/make/12/model?color=mintgreen&doors=4` returns a list of Toyota car models, but filtered so only models with 4 doors and an stock color of mint green are returned.


    Notice that the query strings are really just `{ key: value }` pairs in a slightly different format: `?key1=value1&key2=value2&key3=value3`.

- `?` initiates the query string key/value pairs
- `=` assignes the key to the value
- `&` separates each key/value pair

          app.get("/car/make", (req, res) => {
    console.log(req.query);
    // GET a list of all car makes from the database,
    // filtering by the key/value pairs in req.query
});
        So a GET request to /car/make?color=mintgreen&doors=4 would print { color: "mintgreen", doors: 4 } to the console. Now we have a way to handle dynamic query strings!
        
