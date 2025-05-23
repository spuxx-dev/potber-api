<p align="center">
<img src="./.logo/440x196_round.png" alt="potber logo" height="200" />
</p>
<p align="center">
A RESTful API for the german board <a href="https://forum.mods.de" target="_blank">forum.mods.de</a> built with <a href="https://github.com/nestjs/nest" target="_blank">Nest</a>. The API is a modern JSON API that comes with full OpenAPI documentation and follows REST meticulously. If you're looking for potber-client, you can find it <a href="https://github.com/spuxx-dev/potber-client" target="_blank">here</a>.
</p>

![Production Builds](https://github.com/spuxx-dev/potber-api/actions/workflows/production.yml/badge.svg)
![Staging Builds](https://github.com/spuxx-dev/potber-api/actions/workflows/staging.yml/badge.svg)
![Latest Release](https://img.shields.io/github/v/release/spuxx-dev/potber-api)
![License](https://img.shields.io/github/license/spuxx-dev/potber-api)

## How to use the API

You can find the OpenAPI documentation here:

- [Staging environment](https://test-api.potber.de/swagger)
- [Production environment](https://api.potber.de/swagger)

### CORS

Even though the API was built primarily for serving [potber-client](https://github.com/spuxx-dev/potber-client), it was designed with the ability of serving other usescases in mind. If you need your application's hostname added to the API's allowed origins, feel free to contact me. This is only required for browser-based consumers like websites. If you're building a server or a native application, you can start using `potber-api` right away!

### Authentication & authorization

In contrast to the original forum and its API, almost all potber-api routes require you to be signed in. Since potber-api follows modern standards and patterns, it also makes it much easier to extract a lot of data. Thus, restricting access to forum members was done to decrease the risk of abuse. To find out whether a route requires authentication, check the route description for one of the following tags:

- `🔒 Protected` - You need to be signed in to access this route.
- `🔓 Open Access` - This route can be used without signing in.

To properly create and maintain a session, follow these steps:

1. Send a `POST` request to `/auth/login` including a body that follows the [expected schema](http://localhost:3000/swagger#/Authentication/AuthController_login).
2. In case of a successful login (the response will have HTTP status code `200`), retrieve the entire `access_token` value from the response body and store it (e.g. in a cookie).
3. In all subsequent requests, you need to include the retrieved value as a [Bearer token](https://datatracker.ietf.org/doc/html/rfc6750) in the [Authorization HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization). Make sure to maintain the following syntax (replace `<access_token>` with the retrieved value): `Authorization: Bearer <access_token>`
4. If you receive HTTP status code `401` you either didn't include the correct header or the token expired. You can simply get a new token by calling `/auth/login` again. If you're unsure, test whether your token is valid by calling `GET /auth/session`.
5. To terminate the session, simply get rid of the token (e.g. by deleting the cookie).

> 💡 Tip: Check the token at [jwt.io](https://jwt.io) to understand what it contains and when it will expire.

## Development

### Installation

```bash
$ git clone https://github.com/spuxx-dev/potber-api.git
$ cd potber-api
$ npm install
```

### Setting up the environment

The application expects a couple of environment variables to be set. In a local environment you may provide them by adding an `.env` file into the root folder and copy the following values. Note that `AUTH_JWT_SECRET` can be any kind of string. It will be used for encrypt the session JWT.

```env
# App
APP_PORT=3000
APP_CLIENT_URL=http://localhost:4200
APP_API_URL=http://localhost:3000

# Swagger
SWAGGER_TEST_THREAD_ID=219289

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:4200

# Authentication
AUTH_JWT_SECRET=***
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

This software is [GNU licensed](LICENSE).
