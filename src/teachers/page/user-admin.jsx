import { Button, Form, Input, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import AvatarUpload from '../../components/avatarUpload';
export default function UserAdmin() {

    // 账号密码修改api请求操作
    const onFinish = (values) => {
        const id = localStorage.getItem('_id')
        const username = values.username
        const password = values.password
        const value = { username, password }
        console.log(value)
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

        console.log('Success:', value);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    //删除用户请求操作
    const Delete = () => {
        // 删除用户
        const id = localStorage.getItem('_id')
        axios.delete('http://localhost:3000/teacher/delete/' + id).then(res => {
            console.log(res.data)
            if (res.data.ok === 1) {
                alert('您的账号以删除！期待您下一次的注册！')
                location.href = '/#/login'
            } else {
                alert('账号注销失败！')
            }
        })
    }

    //展示用户名和密码
    const [dataSource, setDataSource] = useState([])
    useEffect(() => {
        const id = localStorage.getItem('_id')
        axios.get('http://localhost:3000/teacher/user/' + id).then(res => {
            // const values = res.data
            const username = res.data.username //李苗苗
            const password = res.data.password
            const profession = res.data.profession
            const values = { username: username, password: password, profession: profession }
            console.log(values);
            setDataSource([values])
        })
    }, [])


    const columns = [
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: '密码',
            dataIndex: 'password',
            key: 'password'
        },
        {
            title: '职业',
            dataIndex: 'profession',
            key: 'profession'
        },
    ];

    return (
        <div>
            <div style={{ width: 850, textAlign: 'center', paddingLeft: 300, paddingTop: 20, }}>
                <Table dataSource={dataSource} columns={columns} pagination={false} />

            </div>
            <div style={{ width: 850, textAlign: 'center', paddingLeft: 200, paddingTop: 50, }}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名："
                        name="username"
                    
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码："
                        name="password"
                    
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 24,
                        }}
                    >

                        <Button type="primary" htmlType="submit" style={{ margin: 60, marginTop: 0, }} >
                            修改
                        </Button>

                        <Button danger style={{ margin: 60, marginTop: 0, }} onClick={Delete} >
                            注销
                        </Button>


                    </Form.Item>

                </Form>
            </div>
            <div style={{position:'absolute' ,right:290,top:130}}>
                <AvatarUpload/>
            </div>
        </div>
    )
}
