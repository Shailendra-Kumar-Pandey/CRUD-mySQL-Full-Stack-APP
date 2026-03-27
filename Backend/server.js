const dotenv = require('dotenv');
const app = require('./src/app');
const db = require('./src/configer/db') 
dotenv.config()

const PORT = process.env.PORT || 5000;



app.listen(PORT, ()=>{
    console.log(`Sever is Running...${PORT}`)
})