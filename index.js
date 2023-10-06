import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

//main page
app.get("/", (req, res) => {

    res.render("index.ejs");

});

//send a message whenever i start nodemon index.js
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});