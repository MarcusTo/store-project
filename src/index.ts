//import xpress from'express'
import express from 'express';

const app = express();

app.get('/', (req , res) => {
    res.send('Running');
});

app.listen(3306, () => { console.log('App is running.')});