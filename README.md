# qweerky
Your favorite music suggestions app

## Assumptions before setup (macOS)

Homebrew is installed along with npm and postgresql
  - Install command located in: [https://brew.sh/]
  - Brew is used to install npm & postgresql

```bash
brew install nvm
nvm install 16.9.1
brew install postgresql@14
```

## Assumptions before setup (Windows)

PostgreSQL (14) is installed
  - [https://www.postgresql.org/download/]

npm (7.21.1) & Node (v16.9.1) is installed with NVM
  - [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm]

## Switching npm versions

```bash
npm install -g npm@7.21.1
```

## Check Requirements

```bash
npm --version
  - (7.21.1)
node --version
  - (v16.9.1)
brew --version
  - Homebrew 3.4.1
psql --version
  - (psql (PostgreSQL) 14.2)
```

## Install Dependencies (/qweerky & /qweerky/backend)

```bash
npm i --save
cd backend/
npm i --save
```

# Running Locally (/qweerky)

First, run the Node.js development server:

```bash
node backend/index.js
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the backend-end result.

Then, open another terminal and run Next.js development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the front-end result.

## Credit
- [https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/]
- [https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/]

## Extras

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
