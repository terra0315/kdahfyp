const http = require('http');
const hostname = '0.0.0.0';

const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const User = require("./users");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
var crypto = require("crypto");
const { response } = require("express");
var key = "passoward";
var algo = "aes256";
var jsonParser = bodyParser.json();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.use('/css', express.static('css'));

app.use('/images', express.static('images'));

app.use('/js', express.static('js'));

app.use('/map', express.static('map'));



const path = require('path')


app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')))
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    // res.send("hello world")
    res.sendFile(__dirname + "/public/index.html");
});


app.get("/surveyform", function (req, res) {
    // res.send("hello world")
    res.render('formcoum');
});




app.get("/safezones", function (req, res) {
    // res.send("hello world")
    res.render('safezone');
});


app.get("/community", function (req, res) {
    res.sendFile(__dirname + "/public/forums/forums.html");
});

app.get("/data.inputs", function (req, res) {
    // res.send("hello world")
    res.render("form1");
});


app.get("/team", function (req, res) {
    // res.send("hello world")
    res.sendFile(__dirname + "/team.html");
});

app.get("/earthqq", function (req, res) {

    //  res.send("jfffkmek");
    var r11homi = String(req.body.homireg22);
    //input box with github link

    User.find({ "reg_name": r11homi }, function (err, users) {

        res.render("world", {
            regname: r11homi,
            usl: users
        });

    });

});

app.post("/", async function (req, res) {
    var r11 = String(req.body.n33);

    try {
        const users = await User.find({ reg_name: r11 });
        res.render("dash_home", {
            people: [55, 49, 44, 24, 15],
            regname: r11,
            usl: users
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});





app.post("/chartsjsp", function (req, res) {

    //  res.send("jfffkmek");
    var r11homi = String(req.body.homireg);
    //input box with github link

    User.find({ "reg_name": r11homi }, function (err, users) {

        res.render("charts", {
            regname: r11homi,
            usl: users

        });

    });

});



app.post("/chtohoml", async function (req, res) {
    var r11ch = String(req.body.chreg);
    console.log(r11ch);

    try {
        const users = await User.find({ reg_name: r11ch });
        res.render("dash_home", {
            people: [55, 49, 44, 24, 15],
            regname: r11ch,
            usl: users
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});




app.post("/tables", function (req, res) {

    //  res.send("jfffkmek");
    var r11homit = String(req.body.homiregt);
    //input box with github link

    User.find({ "reg_name": r11homit }, function (err, users) {

        res.render("tables", {
            regname: r11homit,
            usl: users

        });

    });

});



app.post("/tbtohoml", function (req, res) {

    //  res.send("jfffkmek");
    var r11tb = String(req.body.tbreg);
    console.log(r11tb);

    // res.send("the sum is"+`<br/><br />email:${s11}<br />password:${c11}<br />`);
    User.find({ "reg_name": r11tb }, function (err, users) {

        res.render("dash_home", {

            people: [55, 49, 44, 24, 15],
            regname: r11tb,
            usl: users

        });



        // if (err) console.warn(err + "error in user function");
        // console.warn(users);
    });


});





app.post("/chtotable", function (req, res) {

    //  res.send("jfffkmek");
    var r11chhtotb = String(req.body.chtotbreg);
    //input box with github link

    User.find({ "reg_name": r11chhtotb }, function (err, users) {

        res.render("tables", {
            regname: r11chhtotb,
            usl: users

        });

    });

});


app.listen(process.env.PORT || 8000, function (req, res) {
    console.log("MAIN UI: http://localhost:8000/");
});






