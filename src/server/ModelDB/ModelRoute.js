import mongoose from 'mongoose'
// 用户模型
const TypeModel ={
    username:String,
    password:String,
    profession:String,
    avatar:String,
}
const userModel = mongoose.model('user',new mongoose.Schema(TypeModel))  //数据库的users集合中

export default userModel;


