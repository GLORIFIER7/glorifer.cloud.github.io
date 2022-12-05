const express = require('express');
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connect server to MongoDb atlas
//login to mongoDb atlas
//click connect
//choose connect to your application
mongoose.connect('mongodb+srv://glorifier:arlos3890@glorifier.kgka7aj.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser:true, useUnifiedTopology: true});
//useNewUrlParser flag - allows users to fall back to the old parser if they find a bug in the new parser.
//you should useNewUrlParser: true unless there are instances that prevents you to connect.

//useUnifiedTopology: default is false
//set to true to opt in using mongoDB driver's new connection management engine

//get a notification if successfully connected or not
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => console.log("Connected to database"));

//Creation of Schema
    //schema it defines how data is organized within a relational database.
    //it includes logical constraints such as table names, fields, data types and the relationship between the entitities.

const taskSchema = new mongoose.Schema(
    {
        name:String,
        status: {
            type: String,
            default: "pending"
        }
    }
);

//creation of models
const Task = mongoose.model("Task", taskSchema);

//Routes

/*
    Business Logic
    1. add a functionality to check if there are duplicate task.
        - if the task already exists in the database, we return an error
        - if the task doesn't exist in the database, we add it in the database.
    2. The task data will be coming from the request's body.
    3. Create a new Task object wuith a "name" field property.
    4. The "status" property does not need to be provided because our schema default is pending upon creation of the project.
*/

app.post('/tasks', (req,res) => {
    Task.findOne({name:req.body.name}, (err, result) => {
        if (result != null && result.name == req.body.name)
        {
            return res.send("Duplicate task found");
        }else {
            let newTask = new Task({
                name:req.body.name
            });

            newTask.save((err, savedTask) => {
                if (err){
                    return console.error(err)
                }else {
                    return res.send("New task created");
                }
            });
        }
    }

    )
});

/*
    BUSINESS LOGIC
    1. Retrieve all documents
    2. If an error is encountered, print the error
    3. If no errors are found, send back to the client/postman array of documents
*/

app.get('/tasks', (req,res) => {
    //Model method
    Task.find({}, (error, result) => {
        if (error){
            return console.log(error)
        }else{
            return res.send(result);
        }
    });
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));