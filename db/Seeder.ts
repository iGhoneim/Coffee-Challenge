import {createConnection, getConnection} from "typeorm";
import Machine from "../src/models/Machine";
import MachineTransformer from "../src/transformers/MachineTransformer";
import Pod from "../src/models/Pod";
import PodTransformer from "../src/transformers/PodTransformer";

const machines = require('./machines.json');
const pods = require('./pods.json');

class Seeder {

    private static async cleanDatabase() {
        const entities = getConnection().entityMetadatas;
        for (const entity of entities) {
            await getConnection()
                .getRepository(entity.name)
                .clear();
        }
        console.log('Database cleaned!');
    }

    seed() {
        createConnection()
            .then(() => {
                console.log("Database connected!")
                Seeder.cleanDatabase()
                    .then(() => {
                        this.seedMachines();
                        this.seedPods();
                    });
            })
            .catch(reason => console.error(reason));
    }

    private seedMachines() {
        let models = machines
            .map(machine => new MachineTransformer().transform(JSON.stringify(machine)));
        Machine.save(models)
            .then(() => console.log('Machines seeded!'))
            .catch(reason => console.error(reason));
    }

    private seedPods() {
        let models = pods
            .map(pod => new PodTransformer().transform(JSON.stringify(pod)));
        Pod.save(models)
            .then(() => console.log('Pods seeded!'))
            .catch(reason => console.error(reason));
    }
}

new Seeder().seed();
