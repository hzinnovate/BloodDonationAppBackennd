const express = require('express');
const app = express();
const db = require('./config/db');
db.connection.once('open', () => {
    console.log('connected')
})
    .on("error", error => {
        console.log('error ==> ', error)
    })

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Running on port: 3001')
})
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept,X-Requested-With, Content-Type, Access-Control-Request-Method,Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
app.get('/', (req, res) => {
    res.send(
        `
        <h1> For Register </h1>
        fetch('https://blood-donation-system-app.herokuapp.com/users/register', { <br>
	    method: 'POST', <br> 
 	    headers: { <br> 
 	    'Content-Type' : 'application/json', <br>
         }, <br>
         body: JSON.stringify({ <br>
            name: 'hasnain', <br>
            bloodgroup: 'B Possitive', <br>
            email: 'hasnain.zaidi95@gmail.com', <br>
            password: '123456789' <br>
            }),
         }), <br> 
         }).then(res => res.json()) <br>
       .then(re => console.log(re)) <br>
       <h1>For Login</h1>
       fetch('https://blood-donation-system-app.herokuapp.com/users/login', { <br>
        method: 'POST', <br>
        headers: { <br>
        'Content-Type' : 'application/json', <br>
        }, <br>
        body: JSON.stringify({ <br>
        email: 'hasnain.zaidi95@gmail.com', <br>
        password: '123456789' <br>
        }), <br>
        }).then(res => res.json()) <br>
        .then(re => console.log(re)) <br>
`
    )
})



app.use(express.json())

app.use('/', require('./routes/index.js'))
