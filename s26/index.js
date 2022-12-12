
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");

/*import routes module*/
const courseRoutes = require("./routes/courseRoutes");
const userRoutes = require("./routes/userRoutes");

/*mongodb connection & notification*/
mongoose.connect('mongodb+srv://glorifier:arlos3890@glorifier.kgka7aj.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('strictQuery',true);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to Database`));



/*Middlewares*/
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


/*Routes*/
app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);



app.listen(PORT, () => console.log(`Server running at port ${PORT}`))