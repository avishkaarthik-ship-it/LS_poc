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

async function CreateProject() {
    try {

        const p = await prisma.hl_project.create({
            data: {
                name: "image_classifier",
                desc: "simple image box classification project",
                annotator_project_id: 7,
                stage_order: "collect,annotate,review,complete",
                current_stage: "collect"
            } 
        });
        console.log("Created project: ", p.id);
    } catch(error) {
        console.log("Error creating project: ", error);
    }
}

CreateProject();