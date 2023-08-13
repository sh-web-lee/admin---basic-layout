const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express();


// middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true)
  //设置允许跨域的域名，*代表允许任意域名跨域
  // res.header("Access-Control-Allow-Origin","*");
  // //允许的header类型
  // res.header("Access-Control-Allow-Headers","content-type");
  // //跨域允许的请求方式 
  // res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  next();
})



app.use(cors({
  origin: 'http://localhost:3200'
}))

app.use(express.json());
app.use(cookieParser());

const AuthApi = require('./routes/auth')
const RouteApi = require('./routes/routes')

app.use('/api/v1/auth', AuthApi)
app.use('/api/v1/route', RouteApi)


app.listen(8000, () => {
  console.log('APP Working···')
})