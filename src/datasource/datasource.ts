import {DataSource} from "typeorm";
import {Person} from "../entity/Person";
import {Role} from "../entity/Role";

export const AppDataSource = new DataSource({
    type: "better-sqlite3",
    database: './src/main.sql',
    synchronize: true,
    logging: true,
    entities: [Person, Role],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!')
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err)
    })