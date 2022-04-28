
const express = require('express');

const app = express();
app.use(express.json())
app.post('/Bjaj/Finersive/posts', (req, res) => {
    const data = req.body.data;
    const numbers = [];
    const alphabates = [];
    data.map((d)=> {
        console.log(parseInt(d));
        if(isNaN(parseInt(d))){
            alphabates.push(d);
        } else {
            numbers.push(d);
        }
    });

    const apiRes = {
        is_success: true,
        user_id: "john_doe_17091999",
        email : "john@xyz.com",
        roll_number:"ABCD123",
        numbers: numbers,
        alphabets: alphabates
        };
        
    res.json(apiRes);
});


app.listen(3001, ()=> console.log('abs'))
// const addPost = async (req, res) => {
//     // get the data from req.body
//     let arr = req.body;
//     // add the post
//     let response = await axios.post(`https://Bjaj/Finersive/posts`, {
//         arr
//     });
//     // return response
//     return res.status(200).json({
//         message: response.data
//     });
// };