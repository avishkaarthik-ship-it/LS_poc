const {PrismaPg} = require("@prisma/adapter-pg");   
const {PrismaClient} = require("../generated/client");
require('dotenv').config(); 

const adapter = new PrismaPg({
   connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({
   log: ['query', 'info', 'warn', 'error'],
    adapter,
});

async function CreateTask() {
    try {

        await prisma.hl_task.create({
            data: {
                project_id: 1,
                annotator_task_id: 1,
                name: "Image Annotation Task 1",
                desc: "Annotate images for classification",
                status: "open",
                type: "review"
            } 
        });
    } catch(error) {
        console.log("Error creating task: ", error);
    }
}

CreateTask();