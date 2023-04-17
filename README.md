## 项目技术栈

本项目是一个提供几何展示的网站，目前利用的技术有Vite、React、Ant Design UI组件库、Three.js、Express、Axios、Node、MongoDB数据库等对网站的开发(项目需联网，否则网络模型无法加载)。

## 项目运行

```
git clone --path 1：  [https://github.com/WoShi-God/GeoGebraTeaching-Aid-System.git](https://github.com/WoShi-God/React-GeoGebraTeaching-Aid-System.git)

cd  React-GeoGebraTeaching-Aid-System

pnpm install 

pnpm run dev 
```

#### 注意

>如果不启动服务器，那么登录不进去内页，该网站可以使用nodemon 进行启动server，但同时还需要有安装MongoDB的数据库才能运行，否则也登录不了页面。
>在server文件夹终端启动！！！
```
nodemon indexRoute
```

>服务端返回数据的格式是类似这样子一个数据结构

```
{
    "_id": ObjectId("641581eea6f5558bc1baccd9"),
    "userId": "63e8aac3bcfed66fe3e424dd",
    "file": "http://localhost:3000/public/avatar/0.11118248822293553_1679131118889.jpg",
    "profession": "老师",
    "username": "李密",
    "__v": NumberInt("0")
}
```

>这个React的项目跟nodejs的Express框架和Axios配合做接口的开发。


## 说明

>处理器	Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz   1.80 GHz
>版本	Windows 11 家庭中文版
>机带 RAM	8.00 GB (7.85 GB 可用)
>系统类型	64 位操作系统, 基于 x64 的处理器

>如果pnpm install太慢导致有些依赖包下载失败 你可以看控制台的报错信息，再手动pnpm install 具体的开发包，直接运行;

>例：

```
npm install -g express
```

### 大致结构：
```
public:图片、建模模型
src:{
    components：各页面复用的组件
    login:登录、注册页面的功能组件
    models:GeoGebra模型加载
    router:各页面间的路由
    server:服务器、数据库组件
    students:学生页面的各功能组件
    teachers:老师的各功能组件
    App.jsx:路由入口的书写
    main.jsx:挂载App.jsx组件
    index.html:总入口
}
```

### http请求示例：
```
import axios from 'axios'
axios.patch('http://localhost:3000/teacher/update/' + id, value).then(res => {
            console.log(res.data) //后端返回来一个ok：1
            if (res.data.ok === 1) {
                alert('恭喜您！账号密码修改成功！')
                localStorage.removeItem('_id')
                location.href = '/#/login'
            } else {
                alert('很遗憾账号密码修改失败！！！')
            }
        })
```

### 后端路由级路由示例：
```
import express from 'express'
//还需引入数据库数据模型
const router = express.Router()
router.get('/avatar/find/:id', async (req, res) => {
    const userId = req.body
    AvatarModel.findOne(userId).then(data => {
        res.send(data.file)
    })
})
```

### 数据库数据模型示例：
```
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

```
## 功能一览
- [√] 项目按路由模块加载
- [√] 登录、注册，以及登录权限控制
- [√] 用户退出功能
- [√] 登录加载等候页面
- [√] 左侧菜单，正常切换，页面路由配置
- [√] Three.js模型正常显示，外部建模模型加载
- [√] GeoGebra模型记载
- [√] 老师学生列表信息加载
- [√] Axios数据请求
- [√] MongoDB数据库运行
- [√] 个人信息头像上传功能
- [√] 各后端数据接口

## 总结

1、这整个技术栈写熟悉了之后，用来做后台管理系统类的实在是很方便。

2、目前来说，不足的地方是在于没有很好的处理每个用户的头像分配功能，日后再补充上，由于本人的技术知识有限，整个网站还是有许多瑕疵。
