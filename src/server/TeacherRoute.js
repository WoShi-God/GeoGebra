import userModel from './ModelDB/ModelRoute.js'   //数据模型
import express from 'express'
const router =  express.Router()
// 获取学生列表
router.get('/list',async (req,res)=>{
    userModel.find({profession:'学生'},{username:1,profession:1,_id:1}).then(data=>{
        // 过滤后只会获取username,profession ,_id
        const value =data
            res.send(value)
            //返回前端是一个数组
    })
})
// 用户删除(用户设置通用)
router.delete('/delete/:id',async(req,res)=>{                 //id值就是数据库集合里Object后面数字
    userModel.deleteOne({_id:req.params.id}).then(data=>{
        res.send({ok:1})
    })
  
})
// 用户设置信息（用户设置通用）
router.get('/user/:id',async(req,res)=>{
    const value = {_id:req.params.id}
    userModel.find(value).then(data=>{
        res.send(...data)
    })
})
// 用户设置修改
 router.patch('/update/:id',async(req,res)=>{
    
    const {username,password}= req.body
    // res.send({_id:req.params.id})
    userModel.updateOne({_id:req.params.id},{username,password}).then(data=>{
        res.send({ok:1})
        // '修改成功！'+
    })
 })
// 作业提交列表
router.get('/worklist',async(req,res)=>{
    fileModel.find({profession:'学生'}).then(data=>{
        res.send(...data)
    })
})
export default router;