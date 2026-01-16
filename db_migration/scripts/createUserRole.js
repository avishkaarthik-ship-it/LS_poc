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

async function CreateProjectRole() {
    try {

        await prisma.hl_user_project_role.create({
            data: {
                platform_user_id: 103,
                project_id: 1,
                role: "annotator"
            } 
        });


    }catch(error) {
        console.log("Error creating user role: ", error);
    }
}

CreateProjectRole();