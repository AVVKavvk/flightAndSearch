# Welcome to FlightsAndSearch Service

## Project setup
- clone the project on your local
- Execute `npm install ` on the same root directory
- create a new `.env` file in same root directory and add the following environment variavles
  - `PORT=3000` 
- inside `src/config` create a new file named `config.json` and then add the following piece of code 
```
{
    "development": {
      "username": "YOUR_DATABASE_USERNAME",
      "password": "YOUR_DATABASE_PASSWORD",
      "database": "DATABASE_NAME",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
   
  }
  
```
- once you've added your db config as listed above , go to the src folder using terminal and execute `npx sequelize db:create` and then execute
