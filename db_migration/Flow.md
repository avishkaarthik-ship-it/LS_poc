Core flows: 

### Task assignment to a user flow

HL's trust factor
 - HL does not validate if the user is allowed to perform a task , This is handled by the quest backend 
 - HL only associates a with a. task and project
 
The flow : 
 - HL gets the request from QUEST BE (S2S) to assign a task to a user and passes the platform_user_id 
 - Basic checks and validation if a task is open and fro assignment (if not already assigned to another user or if the task is completed ) 
 - The HL checks for this user in HL_DB 
 - If user does not exists then cerate an entry in the db for the user 
 - If there is no project association then create a project association for skill tracking for that particular project 
 - Create a user task association for that task 
 - Generate a 1:1 token of user to task and send in response to fetch the task
 NOTE: this token is only valid for that particular task

### Collection flow
 - Request 
    - project id 
    - collection task id

The flow: 
 - Get the project and stage config to figure out how the pipeline is 
 - Once the collection happens , create the task in LS under the associated project in LS 
 - Based on the pipeline compile the upcoming stage tasks and associate the LS_TASK_ID (annotator_task_id) , which can be also used to group these tasks together
 for example : task_id_1 is collection it creates an LS_TASK_ID = 20 so now the next tasks in pipeline like annotation and review are grouped likes so 
 LS_TASK_ID:20 = [task_id_1, task_id_2 (annotation), task_id_3 (collection)]
 - NOTE: the creation of the next stages tasks only happen if the collection is validated or approved by either an automatic ML model or manual intervention   

### Annotation flow
 - Request
    - 1:1 token
    - task info
    - annotation data
 
The flow: 
 - validate the token 
 - Basic checks like task expiry and max attempt reached 
 - add annotation LS and mark the status of annotation task to <IN_REVIEW> or something
 - get the annotation id and mark the attempt and add it in the user task association
 
### Review Approve / Reject flow 
NOTE: Hl will send the LS task info also when request for the task details this will have the annotations associated to the task 

 - Request
    - 1:1 token
    - task id
    - annotation_id
 
The flow: 
 - validate the token 
 - Basic checks 
 - QC approves or rejects the annotation
 - If approves then both the annotation and review task associated with that LS_task_id is marked as done/completed also update the status in the user task association for both annotator and reviewer 
 - if rejected then the review task in HL is set to open and appropriate status and set in user task association for the reviewer as for annotator there is a new association created with an expiry time 
 - if the user does not performs in that expiry window it is open for other users to pick up 
 - QUESTION TO PRODUCT: what happens to the reviewer will he still be associated to the same task for reviewing or will it be open for other reviewer does the same chain persist or a new one is created ?


### Onboarding and test flow

The flow: 
 - Onboarding is a project with a simple 1 stage config and 1 task 
 - Once a user performs onboarding the HL_user entry will be created and the profile data will be store and act as the SOT 
 NOTE: same for test but will be storing tye skill data per project as mentioned in the model to have the data split into contextual chunks
 - QUESTIONS: what happens on profile update do we update this info in both the place like QUEST and HL ? 
 