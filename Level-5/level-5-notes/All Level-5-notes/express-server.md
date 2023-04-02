# Intro to Express
  # Initialize a new node project  
      - command # npm init -y 
          -  creates a package.json file


# Install Express
  - npm install express 
    -brought in a package-lock.json file
    -brought in node_modules

    -create new main file   
      -examples: index.js, main.js, server.js

# Aside: "req" and "res"
  -res = response
  -req = request


# Nodemon -globally installed only need once/completed
  npm install -g nodemon

# Add .gitignore file to client side and server side
  # Logs
<!-- logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env
*.env -->

# Install Morgan
  # Console errors in Express
  # Use a logger
    * npm install morgan