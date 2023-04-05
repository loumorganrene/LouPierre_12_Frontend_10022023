# SportSee Dashboard

This repo contains the source code to run the frontend for the sports analytics dashboard **SportSee**.

## 1. General information
This project runs in 2 parts:
- The [**backend**](https://github.com/loumorganrene/LouPierre_12_Backend)
- The **frontend** (you are here)

Follow the installation instructions below.

## 2. Installing the backend
 For the frontend to be able to access the data, the backend will first need to be running. To install and run the backend, clone [this repo](https://github.com/loumorganrene/LouPierre_12_Backend) and follow the instructions from the **README**.

## 3. Installing the frontend
### 3.1 Prerequisites
- [Node.js (Version 16.17)](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [React Router Dom](https://reactrouter.com/en/main)

### 3.2 Launching the project
1. Clone this repository.
2. The `npm install` command will allow you to install the dependencies.
3. The `npm run start` command will allow you to run the React app.

### 4 Examples of queries

- `http://localhost:3000/user/12` - Retrieves user 12's main information.
- `http://localhost:3000/user/18` - Retrieves user 18's main information.

> ***Note:** The backend will run on port **3000**. To allow for both the backend and the frontend to run concurrently, the default React port has been changed to port **3001**.*