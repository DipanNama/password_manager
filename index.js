const app = require('express')();
const PORT = 5000;
const bodyParser =  require('body-parser');
const passRoute = require('./routes/pass.js')

app.use(bodyParser.json());

app.use('/',passRoute);

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
})