# Personal Finance Manager

This is a personal finance manager project.

## Prerequisites

Before running this project, make sure you have installed:

- Node.js (version 16 or higher)
- npm (package manager for Node.js)

## How to run the project

1. Clone the repository on your local machine:

`git clone https://github.com/egydiobneto/finance.git`

2. Install dependencies:

`cd finance`
`npm install`

3. Set up environment variables:

- Create a `.env` file in the root of the project.
- Add the following environment variables:

`PORT=3000 # Port on which the server will run`
`MONGODB_URI=mongodb://localhost:27017/personal-finance-manager # MongoDB URI`

- NOTE: The MongoDB URI should be replaced with your own MongoDB database URI.

4. Start the server:

`npm start`

5. Access the application in your browser at `http://localhost:3000`.

## Features

This personal finance manager has the following features:

- Add expense and revenue transactions;
- View the current balance, that is, the difference between expenses and revenue.

## Technologies used

- Node.js
- Express.js
- MongoDB (with Mongoose)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
