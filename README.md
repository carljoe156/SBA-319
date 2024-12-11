# SBA-Module-319-MongoDB-Application

A blog backend with functionalities of Users, Posts and Comments
currently, this project can be reviewed via POSTMAN using the HTTP verbs and Routes below.

## Objectives

- Create a server application with Node, Express, and MongoDB.
- Create a CRUD API using Express and MongoDB.
- Create MongoDB indexes.
- Use MongoDB indexing to make efficient queries.
- Create MongoDB validation rules.
- Use MongoDB validation to ensure data consistency.

## Project Setup

### Installation

1. Clone the repository:
   `git clone https://github.com/carljoe156/mongoose-example.git`

2. Navigate into the project directory:
   `cd Mongoose-express-example-2024`

3. Install the required dependencies:
   `npm install`

#### Routes

- **Homepage**:  
  [https://localhost:5052](https://localhost:5000)  
  This brings you to the homepage of the app.

  **Seed Routes**:

  - [https://localhost:5052/api/fruits/seed](https://localhost:5000/api/seed/seed)  
    Temporarily seeds the data. As of now, you can manually seed via POSTMAN.

| HTTP Verbs | Route             | Purpose                           |
| ---------- | ----------------- | --------------------------------- |
| **GET**    | /api/users        | Retrieve all users                |
| **GET**    | /api/users/:id    | Retrieve a specific user by ID    |
| **POST**   | /api/users        | Create a new user                 |
| **PUT**    | /api/users/:id    | Update an existing user's details |
| **DELETE** | /api/users/:id    | Delete a user                     |
| **GET**    | /api/posts        | Retrieve all posts                |
| **GET**    | /api/posts/:id    | Retrieve a specific post by ID    |
| **POST**   | /api/posts        | Create a new post                 |
| **PUT**    | /api/posts/:id    | Update an existing post           |
| **DELETE** | /api/posts/:id    | Delete a post                     |
| **GET**    | /api/comments     | Retrieve all comments             |
| **GET**    | /api/comments/:id | Retrieve a specific comment by ID |
| **POST**   | /api/comments     | Create a new comment              |
| **PUT**    | /api/comments/:id | Update an existing comment        |
| **DELETE** | /api/comments/:id | Delete a comment                  |

|

<br/>
## Requirement
                                                                                                                                                                                                                                                            | Weight | Done |

| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---- |
| **Use at least three different data collections within the database (such as users, posts, or comments).** | 5% | ✅ |
| **Utilize reasonable data modeling practices.** | 10% | ✅ |
| **Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.** | 10% | ✅ |
| **Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.** | 10% | ✅ |
| **Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.** | 10% | ✅ |
| **Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.** | 10% | ✅ |
| **Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable.** | 5% | ✅ |
| **Include sensible MongoDB data validation rules for at least one data collection. Note: this may be accomplished in a number of ways. If you choose to perform this task outside of your application's code, you must include a way to test the validation within the application's routes. This can be as simple as providing a POST route that attempts to create an invalid document and displays the resulting error.** | 5% | ✅ |
| **Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection. Note: Double-check this requirement before submission. Testing your delete routes may leave you under the requirement. To be safe, populate your collections with sample data well above the requirement (we recommend 10-20 documents).** | 5% | ✅ |
| **Utilize reasonable code organization practices.** | 5% | ✅ |
| **Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).** | 10% | ✅ |
| **Bonus Objectives** | | |
| **Commit frequently to the git repository.** | 5% | ✅ |
| **Include a README file that contains a description of your application. This README must include a description of your API's available routes and their corresponding CRUD operations for reference.** | 5% | ✅ |
| **Level of effort displayed in creativity and user experience.** | 5% | ✅ |
