import {AppDataSource} from './datasource/datasource'
import {Person} from "./entity/Person";
import fs from 'fs';
import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser'

const app: Express = express();
const port = 3000

app.use(bodyParser.json())

const personRepository = AppDataSource.getRepository(Person)

app.get('/', (req, res) => {
    let readme = './README.md';
    let output = fs.readFileSync(readme, 'utf8');
    //res.send(marked(output.toString()));
    res.send()
})

app.get('/persons', async (req, res) => {
    let persons = await personRepository.find({
        relations: {
            roles: true
        }
    })
    res.send(persons)
})

app.listen(port, () => {
    console.log(`⚡️ Server listening on port ${port}`)
})
