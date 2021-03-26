var courses = [
    {title: "Raspberry Cake",
    cost:50     
    },
    {title: "Apple Sauce",
    cost:500     
    },
    {title: "Hamburger",
    cost:100     
    }
]


exports.showCourses=(req, res) => {
    res.render("courses",{offeredCourses: courses});
}

exports.showSignUp = (req, res) => {
    res.render("contact")
}


exports.postedSignUpForm = (req,res) => {
    res.render("thanks")
}

exports.showIndex = (req,res) => {
    res.render("index")
}