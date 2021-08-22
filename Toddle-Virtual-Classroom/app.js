require("dotenv").config();
const express = require('express');
const app = express();
const tutorRouter = require("./TVC/tutor/tutor.router");
const studentRouter = require("./TVC/student/student.router");

app.use(express.json());

app.use("/TVC/tutor", tutorRouter);
app.use("/TVC/student", studentRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running on PORT : ", process.env.APP_PORT);
});