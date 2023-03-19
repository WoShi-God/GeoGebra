import React,{ useState } from 'react'
import { Button, Form, Input, } from 'antd';
import './css/login.css'
import axios from 'axios'
import {
    WechatFilled,
    QqCircleFilled,
    GithubFilled,
    TwitterCircleFilled,
    LockOutlined,
    UserOutlined
} from '@ant-design/icons';
export default function Log() {

    // const [count, setCount] = useState(0)
    // 拦截器设置
    // 添加请求拦截器
    // axios.interceptors.request.use(function (config) {
    //     // 在发送请求之前做些什么

    //     return config;
    // }, function (error) {
    //     // 对请求错误做些什么
    //     return Promise.reject(error);
    // });
    // // 添加响应拦截器(请求后接受)
    // axios.interceptors.response.use(function (response) {
    //     // 2xx 范围内的状态码都会触发该函数。
    //     // 对响应数据做点什么
    //     const { authorization } = response.headers
    //     authorization && localStorage.setItem("token", authorization)
    //     return response;
    // }, function (error) {
    //     // 超出 2xx 范围的状态码都会触发该函数。
    //     // 对响应错误做点什么
    //     return Promise.reject(error);
    // });



    // 登录onFinish

    const onFinish = (values) => {
        console.log('Received values of form: ', values); //获取到了输入的用户名
        // 登录检验axios
        axios.post("http://localhost:3000/login", values).then(res => {
            const backValue = res.data
            //console.log(res.data)  //res.data就是后端查询数据库返回的值{_id: '63e780c817755b435b239ee4', username: '李苗苗', password: '3322', profession: '学生', __v: 0}
            // console.log(backValue)  
            if (backValue.profession === '老师') {   //跳转到老师页面
                console.log('1111');
                window.localStorage.setItem('_id',backValue._id)
                localStorage.setItem('profession','老师')
                location.href = '/#/teacher'
            } 
            else if (backValue.profession === '学生') {   //跳转到学生页面
                window.localStorage.setItem('_id',backValue._id)
                localStorage.setItem('profession','学生')
                location.href = '/#/student'
            }
            else {  //重定向login，跳出一个弹窗提醒
                alert('账号密码错误或无此账号，请重新输入或去注册！')
                location.href = '/#/login'
            }
        }).catch(err => {
            console.log(err)
        })
    };

    return (
        <div>
            {/* 登录页面 */}
            <div className='card' >

                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                    layout="vertical"
                    labelCol={{
                        span: 8,
                    }}
                >

                    <div className='card-header'>
                        <h1 className='header-font'>登录</h1>
                        {/* Cubic Geometry */}
                    </div>
                    {/* 账号、密码输入框 */}

                    <div className='card-second'>
                        {/* 用户名 */}

                        <Form.Item
                            name="username"
                            label={<span style={{ fontWeight: 'bold', fontSize: 16, Color: "rgba(255,255,255,0.3)" }}>用户名：</span>}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Username"
                                className='input' />
                        </Form.Item>
                        {/* 密码 */}
                        <Form.Item
                            name="password"
                            label={<span style={{ fontWeight: 'bold', fontSize: 16, }}>密码：</span>}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                className='input'
                            />
                        </Form.Item>

                        {/* 注册、登录按钮 */}
                        <div className='buttons'>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" id='login-button'  >
                                    登录
                                </Button>

                            </Form.Item>
                            {/* className='field' */}
                            {/* 这个是获取账号密码的？username=&user_password= */}
                            {/* 可直接用这个判断 */}
                        </div>

                        {/* 其他登录图标 */}
                        <div className='card-icon'>
                            <div className='icon'><WechatFilled /></div>
                            <div className='icon'><QqCircleFilled /></div>
                            <div className='icon'><GithubFilled /></div>
                            <div className='icon'><a href="#" style={{ color: 'rgb(33, 53, 71)' }}><TwitterCircleFilled /></a></div>
                        </div>
                    </div>
                </Form>
                {/* 注册页面跳转 */}

                <button class='sign-button' onClick={() => {
                    location.href = '/#/register'
                }} >
                    注册</button>
            </div>

        </div>
    )
}
