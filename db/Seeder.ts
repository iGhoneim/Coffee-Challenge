import {createConnection, getConnection} from "typeorm";
import Machine from "../src/models/Machine";
import MachineTransformer from "../src/transformers/MachineTransformer";
import Pod from "../src/models/Pod";
import PodTransformer from "../src/transformers/PodTransformer";

const machines = require('./machines.json');
const pods = require('./pods.json');

class Seeder {

    private static cleanDatabase() {
        getConnection().entityMetadatas
            .filter(entity => !entity.name.endsWith('View'))
            .forEach(async entity => {
                await getConnection()
                    .getRepository(entity.name)
                    .clear();
            });
        console.log('Database cleaned!');
    }

    seed() {
        createConnection()
            .then(() => {
                console.log("Database connected!")
                Seeder.cleanDatabase()
                this.seedMachines();
                this.seedPods();
            })
            .catch(reason => console.error(reason));
    }

    private seedMachines() {
        const models = machines
            .map(machine => new MachineTransformer().transform(JSON.stringify(machine)));
        Machine.save(models)
            .then(() => console.log('Machines seeded!'))
            .catch(reason => console.error(reason));
    }

    private seedPods() {
        const models = pods
            .map(pod => new PodTransformer().transform(JSON.stringify(pod)));
        Pod.save(models)
            .then(() => console.log('Pods seeded!'))
            .catch(reason => console.error(reason));
    }
}

new Seeder().seed();
