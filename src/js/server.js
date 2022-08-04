// console.log("server.js file")

// const express = require("express");
// const cors = require("cors");
// const app = express();

// // app.use(
// //     cors({
// //         origin : "http://localhost:9090",
// //         credentials : true,
// //     })
// // )
// app.get("/",(req, res) => {
//     console.info("POST /simple-cors");
//     console.log("post method");
//     res.json({
//         "firstName":"Derenik",
//         "lastName":"Petrosyan",
//         "email":"ll66s@gmail.com",
//         "gender":"MALE",
//         "dob":"2000-08-18",
//         "password":"1",
//         "confirmPassword":"1"
        
//      });
//      req.setEncoding()
//   });


// app.listen(80);

// const cors = require('cors');

// app.use(
//     cors({
//     origin:"http://localhost:9090",
// })
// );




const form = document.querySelector('form');
function handleSubmit(event) {
    console.log("server js file handleSubmit function");
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());      

    console.log({ value });
    window.open("index.html");
}

form.addEventListener('submit', handleSubmit);