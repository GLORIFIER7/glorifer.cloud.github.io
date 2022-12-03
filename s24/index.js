//CRUD Operations

const { fromWeb } = require("nodemailer/lib/mime-node/le-windows");

//Create
    //insertOne - it inserts one document at a time
    //insertMany - it inserts multiple documents at a time.

/*
    Syntax:
    db.collectionName.insertOne({object})
    db - default
    insertOne - built in method
    - Javascript Comparison
    - object.objectName.method({object})
*/

db.users.insertOne(
 {
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    contact: {
        phone: "87654321",
        email: "janedoe@mail.com"
    },
    courses: ["CSS", "JavaScript", "PHP"]
 }

);

//insertMany()
/*
    Syntax:
    db.collectionName.insertMany([{objectA}, {objectB}])
*/

db.users.insertMany([
    {
        firstName: "Stephen",
        lastName: "Hawking",
        age:76,
        contact: {
            phone: "87654321",
            email: "stephenhawking@mail.com"
        },
        courses: ["Python", "React", "PHP"],
        department: "none"
    },

    {
        firstName: "Neil",
        lastName: "Armstrong",
        age: 82,
        contact: {
            phone: "87654321",
            email: "neilarmstrong@mail.com"
        },
        courses: ["React", "Laravel","SaSS"],
        department: "none"
    }
]);

//Read/Update
/*
    Syntax:
    - db.collectionName.find();
            query, projection
    - db.collectionName.find({field:value});
*/
db.users.find();
//returns all documents

//using a single query - projection is case sensitive
//returns document/s that passes the query/filter
db.users.find({firstName: "Stephen"});

//using multiple query parameters
//this will depend on the key value pairs declared (inserted) inside the collections
/*
    Syntax: 
    db.collectionName.find({fieldA:valueA, fieldB: valueB})
*/
db.users.find({
    lastName: "Armstrong",
    age: 82
});

//update()
/*
    db.collectionName.updateOne(
        {criteria},
        {$set:
            {field:value}
        }
    );
    db.collectionName.updateMany();
*/

db.users.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "0000000",
        email: "test@mail.com"
    },
    courses: [],
    department: "none"
});

//update a single document
db.users.updateOne(
    {
        firstName: "Test"
    },
    {
        $set: {
            firstName: "Bill",
            lastName: "Gates",
            age: 65,
            contact: {
                phone: "123456789",
                email: "bill@mail.com"
            },
            courses: ["PHP", "Laravel", "HTML"],
            department: "Operations",
            status: "active"
        }
    }
);

//Exercise 1: Update the document with first name "Jane" with field department value= none
//use insertOne method