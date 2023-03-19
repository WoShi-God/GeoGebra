import { useState } from 'react'
import { Button, Form, Input, Divider, Radio } from 'antd';
import './css/login.css'
import axios from 'axios'
import {
    WechatFilled,
    QqCircleFilled,
    GithubFilled,
    TwitterCircleFilled,
} from '@ant-design/icons';


export default function Reg() {
    // 注册单选按钮
    const [values,setValues] = useState([])
    const [value, setValue] = useState([]);
    const onChange =  (e) => {
        // console.log('radio checked', e.target.value);
        setValue(e.target.value);
        const radioValue = e.target.value
        return radioValue
    };

    // 注册onFinish
    const onFinish =  (values) => {
        const {username,password} = values
        const profession= value
        const dat = {username,password,profession}
        setValues(dat)
        console.log('表单值: ',values); //获取到了输入的用户名
        // 注册添加用户
        axios.post('http://localhost:3000/register', values).then(res => {
            alert(res.data)
            location.href = '/#/login'
        }).catch(err => { console.log(err); })
    }

    return (
        <>
            {/* 第二个注册页面 */}
            <div className="card-signUp">
                {/* 注册名字 */}
                <div className='signUp-header'>
                    <h2 className='header-font'>注册</h2>
                </div>
                {/* 中间信息区 */}
                <div className='signUp-second'>

                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        onFinish={onFinish}
                    >
                        {/* 用户名输入 */}
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的用户名!',
                                },
                            ]}
                        >
                            <Input className='input' style={{ width: '240px'}} autoComplete="off" />
                        </Form.Item>
                        {/* 密码输入 */}
                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的密码!',
                                },
                            ]}
                        >
                            <Input.Password className='input' id='Input_M' style={{ position: 'absolute', top: '-7px', width: '240px' }} autoComplete="off" />
                        </Form.Item>

                        {/* 职业多选 */}
                        <div className='profession'>
                            <Form.Item
                                label="职业"
                                name="profession"
                                style={{ width: '240px', marginLeft: '-5px' }}
                                rules={[
                                    {
                                        required: true,
                                        message: '请选择您的职业!',
                                    },
                                ]}
                            >
                                <Radio.Group onChange={onChange} value={value}>
                                    <Radio value={'老师'}>老师</Radio>
                                    <Radio value={'学生'}>学生</Radio>
                                </Radio.Group>
                            </Form.Item>

                        </div>


                        {/* 最后按钮区 */}
                        <div className='signUp-third'>
                            {/* 分割线 */}
                            <Divider className='sign-Div'>如果您有一个账号 ? 请您登录 !</Divider>
                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit" className='signUp-button' >
                                    注册
                                </Button>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button className='signIn-button' onClick={() => {
                                    location.href = '/#/login'
                                }} >
                                    登录
                                </Button>
                            </Form.Item>
                        </div>

                    </Form>
                </div>

                {/* 其他登录图标 */}
                <div className='Second-icon'>
                    <div className='icon'><WechatFilled /></div>
                    <div className='icon'><QqCircleFilled /></div>
                    <div className='icon'><GithubFilled /></div>
                    <div className='icon'><a href="#" style={{ color: 'rgb(33, 53, 71)' }}><TwitterCircleFilled /></a></div>
                </div>
            </div>

        </>
    )
}
