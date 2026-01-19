const axios = require("axios");
const TKN = process.argv[2] || "d7b9acb94f5def3aa4a2c234936f9f4e1752f4f2";
const PROJECT_ID = process.argv[3] || 1; 

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


const GetTasksFromAProject = async (projectId) => {
    try {

        const baseUrl = "http://localhost:8080/api/tasks?project=" + projectId;
    
        const response = await axios.get(baseUrl, {
            headers: {
                'Authorization': `TOKEN ${TKN}` // legacy token auth
            }
        });

        return response.data.tasks.map( task => task.id);

    }catch(error) {
        throw error;   
    }
}

const createDummyUsersAndProjectRoles = async (projectId) => {
    try {

        const [users, roles] =await Promise.all([
            prisma.hl_user.createMany({
                data: [
                    {
                        name: "alice",
                        email: "alice@gmail.com",
                        platform_user_id: 101,
                    },
                    {
                        name: "bob",
                        email: "bob@gmail.com",
                        platform_user_id: 102,
                    },
                    {
                        name: "unauthorized_users",
                        email: "ua@gmail.com",
                        platform_user_id: 103,
                    }
                ]}),

            prisma.hl_user_project_role.createMany({
                data: [
                    {
                        platform_user_id: 101,
                        project_id: projectId,
                        role: "annotator"
                    },
                    {
                        platform_user_id: 102,
                        project_id: projectId,
                        role: "reviewer"
                    }
                ]
            })

        ]);

    }catch(error) {
        throw error;   
    } 
}

async function main () {

    try {
        console.log("Creating project and fetching ls tasks...");
        const [project, ls_tasks] = await Promise.all([
            prisma.hl_project.create({
            data: {
                name: "image_classifier",
                desc: "simple image box classification project",
                annotator_project_id: PROJECT_ID,
                stage_order: "annotate,review",
                current_stage: "collect"
            }
        }),
        GetTasksFromAProject(PROJECT_ID)
        ]);
        console.log("Created project with id: ", project.id, " \n\n");

        console.log("creating users and roles...");
        await createDummyUsersAndProjectRoles(project.id);
        console.log("created users and roles. \n\n");

        console.log("Creating hl_tasks annotate task...");        
        const hlTasks = ls_tasks.map( taskId => {
            return {
                project_id: project.id,
                annotator_task_id: taskId,
                name: "Image Annotation Task 1",
                desc: "Annotate images for classification",
                status: "open",
                type: "annotation"
            }
        } )

        await prisma.hl_task.createMany({
            data: hlTasks
        });

        console.log("Created hl_tasks. \n\n");

        console.log("creating hl_task review tasks...");      
        const hlTasksReview = ls_tasks.map( taskId => {
            return {
                project_id: project.id,
                annotator_task_id: taskId,
                name: "Image Annotation Review Task 1",
                desc: "review annotation for image classification",
                status: "open",
                type: "review"
            }
        } )

        await prisma.hl_task.createMany({
            data: hlTasksReview
        });
        console.log("Created hl_task review tasks. \n\n");
        
        console.log("Initialization completed successfully.");

        return;
    }catch(error) {
        console.log("Error in main: ", error);
    }
}


main();