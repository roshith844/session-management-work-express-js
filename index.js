//imports express and other npm modules
const express = require('express')
const app = express()
const PORT = 8000;
const session = require('express-session')
const cookieParser = require('cookie-parser')
// initialises npm modules
app.use(cookieParser())
app.use(session(
     {
          resave: true,
          saveUninitialized: true,
          secret: 'secret'
     }
))
const user= {
     name : 'Nazim',
     age : 19,
     country : 'India'
}
app.get('/login',(req,res)=>{
     req.session.user =user
     req.session.save()
     return res.send('user Logged In. check cookies on console')
})
app.get('/user',(req,res)=>{
     return res.send(req.session.user)
})
app.get('/logout',(req,res)=>{
     req.session.destroy()
     res.send('user logged out. now you cannot acess user')
})
app.listen(PORT,()=>console.log(`server started running ${PORT}`))