# Interview Web App

A simple web app created as a proof of concept for the Project Management System Internship Interview.

Consists of an Express RESTful API written in TypeScript, and a Remix.run react client.

TODO: Finish

- need to sort out selection logic look at the endpoints (query or params)

- could check backend is running and throw error if not ? error should automatically be thrown via fetch -> func checkBackend -> await fetch(localhost:6060) -> will throw error if offline and redirect to error page **is this needed??** _maybe_

- mMaybe encrypt password both sides? so that a plaintext password is never seen on the server??

**Kind of wish id just used vite with react router instead of remix as i find it overcomplicates**

- Need to finish validation middlewares
