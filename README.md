# Interview Web App

A simple web app created as a proof of concept for the Project Management System Internship Interview.

Consists of an Express RESTful API written in TypeScript, and a Remix.run react client.

TODO: Finish

- A student should be able to select a project
- Might need to add endpoints -> student id module id -> projetcs (might already be added)
- sort out the typing
- eventually submission

- need to sort out selection logic look at the endpoints (query or params)

- could check backend is running and throw error if not ? error should automatically be thrown via fetch -> func checkBackend -> await fetch(localhost:6060) -> will throw error if offline and redirect to error page **is this needed??** _maybe_

- ERROR!!! when a student selects a project they become the owner? need to look into the relation / how im connecting a student to a project

- mMaybe encrypt password both sides? so that a plaintext password is never seen on the server??

- currently file not working
- i need to create an upload handler, uploadd to server (new route). route returns file name. after filename is recieved, add the filename to the project post.

**Kind of wish id just used vite with react router instead of remix as i find it overcomplicates**
