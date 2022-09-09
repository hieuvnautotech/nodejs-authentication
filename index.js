const express = require("express");
const app = express();
// const expressLayouts = require("express-ejs-layouts");
// const path = require("path");
// const cors = require("cors");
// const bodParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth'); // import routes
// const morgan = require("morgan"); // để log
// const connectDB = require("./server/database/connection");
dotenv.config();



// connect db kiểu cơ bản mongoose.connect(
//     "mongodb+srv://hieuvnautotech:211899900So@cluster0.oukndbc.mongodb.net/?retryWrites=true&w=majority",
//     {useNewUrlParser: true},
//     () => console.log('connected to db!')
// );

// connect db kiểu biến môi trường
mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true},
    () => console.log('connected to db!')
);
// const homeRoutes = require("./routes/home-routes");


// app.use(expressLayouts);
// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(bodParser.json());

app.use(express.json());//middleware

// app.use(express.static(path.join(__dirname, "public")));
// app.use(homeRoutes.routes);
// app.use(authRoutes.routes);
app.use('/api/user', authRoute); //middle ware for route

app.listen(3000, () =>
  console.log("App is listening on url http://localhost:3000")
);
