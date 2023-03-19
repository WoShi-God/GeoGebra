import './Mongoose.js'   //数据模型引用
import StuRoute from './StuRoute.js'
import TeacherRoute from './TeacherRoute.js'   //老师
import cors from 'cors'
import express from "express";
import Login from './LoginRouter.js'
const app = express();
app.use('/public', express.static('public'));//挂载静态资源，使图片显示 http://localhost:3000/public/avatar/图片名
app.use(cors())// // 解决跨域问题
app.use(express.urlencoded({ extended: true })) ;  // name=what && age=18
app.use(express.json());    //接受JSON格式  //{name:what ,age:18}
app.use(express.static('public')) //托管静态文件
app.use('/', Login)
app.use('/student', StuRoute)// 学生路由
app.use('/teacher', TeacherRoute)// 老师路由
app.listen(3000, () => {
    console.log('http://localhost:3000');
})
export default app;