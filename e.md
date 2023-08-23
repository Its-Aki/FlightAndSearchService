# welcome to flight service 

## Project Setup
-clone the project on your local
-Execute 'npm install ' on the same path as of your root directory of the downloaded project 
-Create a '.env 'file in root directory and add the following environment variable 
    -'port=3000'
-inside the config folder create a new file and add the following piece of json

```
{
  "development": {
    "username": "<your db name >",
    "password": "<your db password>",
    "database": "flight_search_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
once you have added your db config as listed above go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

