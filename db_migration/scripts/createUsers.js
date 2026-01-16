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

async function main() {
    try {
        await prisma.hl_user.create({
            data: {
                name: "foo",
                email: "foo@gmail.com",
                platform_user_id: 103,
            } 
        });
    }catch(error) {
        console.log("Error creating user foo: ", error);
    }
            
}

main()