//imports express and other npm modules
const express = require('express')
const app = express()
const PORT = 8000;
const session = require('express-session')
const cookieParser = require('cookie-parser')
const user= {
     name : 'Nazim',
     age : 19,
     country : 'India'
}
app.listen(PORT,()=>console.log(`server started running ${PORT}`))