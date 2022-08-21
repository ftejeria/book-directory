# Book-Directory

This proyect allows you to create/update/delete/get different books, which will be store in a mongodb via API.

## Description

Book directory API using express framework which stores book data in a mongoDB using mongoose.

## Getting Started

- Currently you can run this project using docker containers for the database and api or just database.

## Requirements

- Docker && Docker Compose
- Create .env file and add env variables as in .env.example

## How to run

#### Dockerizing mongo and api(use docker env variables)

1. Build docker images from docker-compose

```
docker-compose build
```

2. Start api and mongodb containers from docker-compose

```
docker-compose up
```

- Start adding/updating/deleting/getting books using the api, check request example in the requests folder.

#### Dockerizing just mongo (use localhost env variables)

1. Build docker images from docker-compose

```
docker-compose build
```

2. Start mongodb container from docker-compose

```
docker-compose up mongo
```

3. Start the api

```
npm run start
```

4. Run tests

```
npm test
```

## Authors

Felipe Tejeria
