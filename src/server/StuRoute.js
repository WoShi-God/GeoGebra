import userModel from './ModelDB/ModelRoute.js'   //数据模型
import express from 'express'
import AvatarModel from './ModelDB/AvatarModel.js'
const router =  express.Router()
// 老师发布的作业列表路由
    router.get('/list',async(req,res)=>{     //localhost:3000/student/list
        fileModel.find({profession:'老师'}).then(data=>{
            res.send(data)     //将查到老师发布的作业返回前端
        })
    })
    // 获取老师列表
router.get('/Tlist',async (req,res)=>{
    userModel.find({profession:'老师'},{username:1,profession:1,_id:1}).then(data=>{
        // 过滤后只会获取username,profession ,_id
        const value =data
            res.send(value)
            //返回前端是一个数组
    })
    
})
export default router;