const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute');
const port = 5000;

app.use(express.json());

require('./dbConnect');


app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/user',userRoute);



app.listen(port,()=> console.log(`App listening on port ${port}`));