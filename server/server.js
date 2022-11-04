const express = require('express');
const cors = require('cors')

const app = express();
const port = 8000;
app.use(cors({origin:'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./config/mongoose.config')
require('./routes/person.routes')(app);
// the line above is the shorthand version of below 
// const personRoutes = require("./routes/person.routes");  <-- assign the exported function to a const
// personRoutes(app);     
// <-- invoke the function and pass in the express "app" server

app.listen(port, () => console.log(`Listening on port: ${port}`) );