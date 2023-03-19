import express from 'express'
import multer from 'multer'
import userModel from './ModelDB/ModelRoute.js'   //数据模型
import AvatarModel from './ModelDB/AvatarModel.js'//头像数据模型
import path from 'path'
const router = express.Router()
// 登录后端操作
router.post('/login', async (req, res) => {      //登录axios发送http://localhost:3000/login获取请求
    const value = req.body
    // res.send(value)
    userModel.find(value).then(data => {
        // console.log(data);
        if (data.length === 0) {
            //res.send({ ok: 0 })    //返回OK：1，前端拿到做判断跳转页面
            res.send('账号密码错误请重新输入！')
        } if (data.length === 1) {
            //设置session对象                    // ok:1为查无此用户，重定向登录页面
            // req.session.user = data[0]
            const { username, password, profession } = data[0]
            if (data[0].profession === "老师") {

                res.send(...data)
            }
            else {
                res.send(...data)
            }

        }
    })
})
// 注册后端操作
router.post('/register', async (req, res) => {  //注册axios发http://localhost:3000/register请求

    // 数据添加
    userModel.create(req.body).then(data => {
        res.send('恭喜您，注册成功！')
    })
})

// 头像
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/avatar'); // 设置头像图片存储的目录
    },
    filename: function (req, file, cb) {
        cb(null, Math.random(10) + '_' + Date.now()+ '.jpg'); // 设置头像图片的文件名 + '.jpg'
    }
});
const upload = multer({ storage: storage });
// avatar文件上传数据库   http://localhost:3000/avatar
router.patch('/avatar/:userId', upload.single("avatar"), async (req, res) => {
    //获取的照片文件信息
    const userId = req.body.userId
    const profession = req.body.profession
    const username = req.body.username
    // const url = path.resolve('./public/avatar/' + req.file.filename)
    const url = 'http://localhost:3000/public/avatar/'+req.file.filename
    const values = { file: url, userId,profession,username }
    //console.log(values.file);///获取到file值
    ////获取的用户id
    try {
            AvatarModel.create(values).then(data =>{
                res.json({ imageUrl: url });})
        // 更新数据库中userId的file的值
        // AvatarModel.updateOne({file:values.file}).then(data =>{
        //     res.json({ imageUrl: url });})
        // AvatarModel.updateMany({profession:values.profession})
        // AvatarModel.updateOne({profession:values.username})
        

    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
})


// 头像图片显示
router.get('/avatar/find/:id', async (req, res) => {
    const userId = req.body
    AvatarModel.findOne(userId).then(data => {
        // console.log(data.file);
        res.send(data.file)
    })
})

router.get('/Tlist',async(req,res)=>{
    const va= req.body
    AvatarModel.find({profession:'学生'}).then(data=>{
        for(let i= 0;i<data.length;i++){
        res.send(data[i])
        }
    })

})


export default router;