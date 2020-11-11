const { rejects } = require('assert');
var jwt = require('jsonwebtoken');
var mysql = require('mysql');

const connectDb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employeedb",
});

exports.login = async function (req, res) {
    console.log('Login API')
    let username = req.body.username
    let password = req.body.password

    await authenticateUser(username, password).then((authenticated) => {
        if (!authenticated) {
            return res.status(403).send();
        }
        console.log('authenticated: ', authenticated);
        let payload = { username: username }
        //create the access token with the shorter lifespan
        let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            algorithm: "HS256",
            expiresIn: process.env.ACCESS_TOKEN_LIFE
        })

        //send the access token to the client inside a cookie
        res.cookie("jwt", accessToken, { secure: true, httpOnly: true })
        res.send(JSON.stringify(accessToken));
    }).catch((err) => {
        console.log('ERROR: ', err);
        return res.status(403).send();
    });

}

async function authenticateUser(username, password) {
    return new Promise((resolve, rejects) => {
        if (username != '' && password != '') {
            console.log("username: ", username);
            console.log("password: ", password);
            connectDb.query('SELECT * FROM employee WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
                if (results.length > 0) {
                    resolve(true);
                } else {
                    rejects(false);
                }
            });
        }
    });
}

exports.signup = async function (req, res) {
    console.log('signup API')
    let username = req.body.username;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let location = req.body.location;
    let DOB = req.body.DOB;
    let email = req.body.email;
    var sql = "INSERT INTO employee (firstname,lastname,location,DOB,email,username,password) VALUES ? ";
    var values = [[firstname, lastname, location, DOB, email, username, password]];
    connectDb.query(sql, [values], function (err, result) {
        if (err) throw err;
        // res.send("Data Added successfully");
    });
    console.log("data added")

}

exports.refresh = function (req, res) {

    let accessToken = req.cookies.jwt

    if (!accessToken) {
        return res.status(403).send()
    }

    let payload
    try {
        payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    }
    catch (e) {
        return res.status(401).send()
    }

    //retrieve the refresh token from the users array
    let refreshToken = users[payload.username].refreshToken

    //verify the refresh token
    try {
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
    }
    catch (e) {
        return res.status(401).send()
    }

    let newToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,
        {
            algorithm: "HS256",
            expiresIn: process.env.ACCESS_TOKEN_LIFE
        })

    res.cookie("jwt", newToken, { secure: true, httpOnly: true })
    res.send()
}