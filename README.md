# Coffee-Challenge

---

Coffee-Challenge by `Swenson He`:

* A client is building an e-commerce mobile application for their line of coffee machines and custom coffee pods.
* They are looking to have two screens: one screen to display coffee machines and one screen to display coffee pods.
* On the coffee machines screen, the user may filter by product type and water line.
* On the coffee pods screen, the user may filter by product type, coffee flavor, and pack size.

## Requirements

For development, you will only need [Node.js](https://nodejs.org/en/).

## Installation

* `$ git clone https://github.com/iGhoneim/Coffee-Challenge.git`
* `$ cd Coffee-Challenge`
* `$ npm install`

This will install the following packages:

| Package | Usage |
| --- | --- |
| express | Backend Server |
| jackson-js | JSON Marshaller |
| typeorm | ORM Layer |
| sql.js | Database |
| reflect-metadata | Reflection API |
| ts-node | TS Runner |
| ts-node-dev | TS Watcher |
| ts-tslint | TS Linter |
| typescript | TS Compiler |
| typescript-ioc | TS IoC Container |

## Getting Started!

### Preparing database

Samples (Machines & Pods) are ready to be configured and seeded.

* *Optionally,* edit samples under `db` folder ([machines.json](https://github.com/iGhoneim/Coffee-Challenge/blob/main/db/machines.json) & [pods.json](https://github.com/iGhoneim/Coffee-Challenge/blob/main/db/pods.json))
* Seed database samples by executing `$ npm run seed`

### Running server

* Run server by executing `$ npm run dev` (Production: `$ npm start`)
* Test API by calling REST endpoints (Examples: [api.rest](https://github.com/iGhoneim/Coffee-Challenge/blob/main/api.rest))

## Licence

MIT
