const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname, '../public');
// set temmplates path
const templatePath = path.join(__dirname, "../templates/views"); 
// set partialsPath
const partialsPath = path.join(__dirname,"../templates/partials");

// to set the view engine
app.set("view engine", "hbs");
//to set template folder instead of view engine
app.set("views", templatePath);
// registering partial path
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath));
// template engine route
app.get("", (req, res)=>{
    res.render("index.hbs"); // render matlb ,, se rver pe wo file run krwao
});

// adding about page in template folder
app.get("/about", (req,res)=>{
    res.render("about");
});

app.get("/weather", (req, res)=>{
    res.render("weather")
});

app.get("*", (req, res)=>{
    res.render("404",{
        errorMsg:"Oops Page Not Found"
    });
});

app.listen(port, ()=>{
    console.log(`welcome to the server ${port}`);
})


// if we have to change any party of code rather then in app.js we have to write in terminal "app.js -e js,hbs" once.
// like if we have to change in navbar 