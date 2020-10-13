const express = require("express");
const ejs = require("ejs");
const axios = require("axios");
const app = express();
app.use(express.static('public'));

app.set("view engine", ejs);

app.get("/corona", (req, res) => {
    const url = "https://api.thevirustracker.com/free-api?countryTimeline=EE";

    axios.get(url)
    .then((response) => {
        console.log(response.data);
        let countryData = response.data;
        let dates = response.data.timelineitems[0];

        res.render("index.ejs", {data: countryData, date: dates});
    })
    .catch((error) => {
        console.log(error);
    });
});


app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});
