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

## Controllers

- Student Controller
- Teacher Controller
- Module Controller
- Project Controller

## Routing

- Express router using the controllers

## API

- Express

## Future

- Auth
- More ergonomic routing for endpoints
- More controller functions:
  - Add project to student
  - Add project to module
- Eventually marking, which would involve possibly soft deleting the project
- Security -> CORS? Auth headers?
- Implement into a React App -> hopefully remix.run if it begins working!
