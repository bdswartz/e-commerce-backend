# [Welcome to E-Commerce Backend](https://github.com/bdswartz/e-commerce-backend)

#### E-Commerce Backend is a mySQL2 database using sequelize (ORM) to aid in accessing the data contained within the database.  It allows a business owner to view and change information relating to their product line. It is the backend server and database and is meant to be used with a front end (tbd).

---

#### Collaborators:
* [Brian Swartz](https://github.com/bdswartz)

---

## Installation
npm i

---

## Usage
Type "npm start" while in the root directory of the application files.  Given that the front end is to be developed separately the testing of the API endpoints will need to be performed with a separate package such as Insomnia.


[Usage Video](screen-recording.mov "Usage Video")

---

## Technologies

> <b>Development Tools:</b>
  * node.js
    * [Sequelize package](https://www.npmjs.com/package/sequelize)
    * [mySQL2 package](https://www.npmjs.com/package/mysql2)
    * [dotenv package](https://www.npmjs.com/package/dotenv)
  * JavaScript
  * SQL

  ---

## User Story
### AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

    
### Acceptance Criteria for Minimum Viable Product

GIVEN a functional Express.js API
*  WHEN I add my database name, MySQL username, and MySQL password to an environment  variable file
    THEN I am able to connect to a database using Sequelize
*  WHEN I enter schema and seed commands
    THEN a development database is created and is seeded with test data
*  WHEN I enter the command to invoke the application
    THEN my server is started and the Sequelize models are synced to the MySQL database
*  WHEN I open API GET routes in Insomnia for categories, products, or tags
    THEN the data for each of these routes is displayed in a formatted JSON
*  WHEN I test API POST, PUT, and DELETE routes in Insomnia
    THEN I am able to successfully create, update, and delete data in my database

---
## Features
-  Utilizes sequelize for ORM to aid in creating and querying the database.
-  Uses express as the server.
-  Utilizes the dotenv npm package to keep database credentials hidden from users (and others).


---

## Questions
Please visit my GitHub page
at https://github.com/bdswartz

If there are any questions about the project,
feel free to open an issue or contact me at briandswartz@outlook.com