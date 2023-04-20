# RESTful API for the project management system

## The database models

- Student with basic information, list of modules and list of projects
- Teacher with basic information, and a list of modules
- Module with basic information, 1 teacher, list of students, list of projects
- Project with basic information, list of students, and 1 module

I had to add a list of projects to the teacher as well to make querying the API easier -> should allow the teachers to see the list of projects easier on the frontend.

- Additionally, the teacher will add a new project, and then assign it to a module.
- When assigned to a module the students can then see it.
- The students will then pick one of the projects in each module (?).

## Users

The only users that can access this API are students, teachers and admins, which will be provided auth headers (?) on the frontend.

### Student users:

- view their projects (get)
- view their modules (get)
- view available projects per module (get)
- select a project from selection panel per module (post)
- upload their completed project (post) (possibly behind the scope of this PoC)

### Teacher users:

- view modules (get)
- view the projects they have set (get)
- upload a project (post)
- assign a project to a module
- view projects uploaded by students (get) (possibly behind the scope of this PoC)

### Admin users:

- full access to the api

## Controllers

- Student Controller
- Teacher Controller
- Module Controller
- Project Controller

## Routing

- Express router using the controllers

## API

- Express

## Testing

- Self-testing using Postman and curl

## Future

- Auth
- More ergonomic routing for endpoints
- More controller functions:
  - Add project to student
- Eventually marking, which would involve possibly soft deleting the project
- Security -> CORS? Auth headers? Auth0?
- Implement into a React App -> hopefully remix.run if it begins working!
- finish the seed function (how do I deal with referential integrity?)
- draw out how the controllers work -> might be redundant non-crud controllers in my head
- Most important is the students picking a project
- frontend visualisation would be handy
