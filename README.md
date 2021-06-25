# Node-practical

In this repo you will find the project developed during the Node.JS Practical course of [Platzi](https://platzi.com/clases/practico-node/).

## Table of contents

* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Usage](#usage)
* [Extras](#extras)

## General info

The goal of the course was to build the backend for a social network applying the microservices architectural style. In order to do so, we were asked to connect, and to store data into a real [remote MySQL](https://remotemysql.com/) database.

## Technologies

* [Node.js](https://nodejs.org/es/docs/)
* [Express.js](https://expressjs.com/es/4x/api.html)
* [MySQL](https://dev.mysql.com/doc/)

## Setup

After forking and cloning this repo, you'll need to install all dependencies. Make sure you're placed in the root directory of the project before running the command:
`npm install`

Before you can start trying out the API, you need to establish your own environment variables in a *.env* file, which is placed in the *.gitignore* file. 

```
mysql: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DB,
}
```

As an example, you can find the settings for this in the *config.js* file in the root of the project. You'll need to signup for a free remote MySQL database in the link provided above if you want to try how the API works.

## Usage 

As you can notice, we have split the API into microservices, for which you'll need to run each individually with the commands:

`nodemon api/index.js`

`nodemon post/index-post.js`

`nodemon mysql/index-mysql.js`

If you haven't installed nodemon yet, you may want to install it now by running the command `npm install -g nodemon`, so it gets installed globally in your system. 

Once you have all microservices running simultaneously, all you need is to use your favorite API testing tool to test the futures that have been added to the app. In this case, I've used [Insomnia](https://insomnia.rest/). 

There are some extra tools that we've learned during the course to help us to avoid the nuisance of managing microservices in production. In the following section I'll talk about them.

## Extras

* [pm2](https://pm2.keymetrics.io/)
  
  With these tool you can launch all the microservices at once, allowing you to keep track of the activity you API is having in real time. 

* [Vercel](https://vercel.com/docs)

  You'll need to signup if you want to be able to deploy your API serverless, but also it will help to deploy it locally if you install it in your system with the command `npm i -g vercel`.

* [Redis](https://redis.io/)

  As you may have noticed, we have added a cache as a microservice, which is basically a database in memory. You'll need to signup for Redis if you want to connect your API with the cache microservice.





