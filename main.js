const express = require('express'), app = express();
homecontroller = require("./controllers/homeController");
errorController = require("./controllers/errorController");
subscribersController = require("./controllers/subscribersController");

layouts = require("express-ejs-layouts");
mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/confetti_cuisine",{useNewUrlParser: true, useUnifiedTopology: true })

app.set("port",process.env.PORT||3000);

app.set("view engine", "ejs");
app.use(layouts);


app.get("/", homecontroller.showIndex);
app.use(express.static("public"))
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());


app.get("/courses", homecontroller.showCourses);
app.get("/subscribers", subscribersController.getAllSubscribers);
app.get("/contact",subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);


//app.get("/contact", homecontroller.showSignUp);
//app.post("/contact",homecontroller.postedSignUpForm);


app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), ()=>{

    console.log(`Server is running on port: ${app.get("port")}`)

});