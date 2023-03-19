import mongoose from 'mongoose'
// 文件模型
const FileType = {
    userId:String,
    file:String,
    profession:String,
    username:String,
}
const AvatarModel= mongoose.model('avatar',new mongoose.Schema(FileType))   //数据库avatars集合中

export default AvatarModel;