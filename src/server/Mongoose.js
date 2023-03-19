// 使用mongoose实现自动连接数据库
import { connect } from 'mongoose';
connect("mongodb://localhost:27017/UserDB",
err => {
    if (err) {
        console.log('数据库连接失败');
        return;
    }
    console.log('数据库连接成功');
});












  