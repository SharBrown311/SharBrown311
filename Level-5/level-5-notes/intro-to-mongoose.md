# Mongoose 
-is an object data modeling (ODM) library for MongoDB and Node.js. It provides a way to define data schemas, interact with the database, and perform validation on the data being inserted or retrieved.
    # Purpose
      -Create models
      -Query Data


    # Connect
      -make sure your in the backend and then 
      npm i mongoose@6.10.3


      #Information setup for each folder and project system: 
        -all installed variables
        -middleware for every request
        -routes
        -error handler

-err is only set if there is an error with the database, not if nothing is found
-for the findOne function, if nothing is found that data parameter is null
-if you need to access a particular model(called Friend for example), just use:
  - mongoose.model("Friend)

  