import express from 'express';

const app = express();

app.use("/", (req,res,next) => {
    res.json({
        "msg": "Hello World"
        });
});

hi 

app.listen(3000);