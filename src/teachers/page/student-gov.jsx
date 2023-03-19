import React, { useState, useEffect } from "react"
import { Table, Button, Popconfirm, Alert } from 'antd';
import '../css/studentgov.css'
import axios from 'axios'
import {
    DeleteTwoTone,
} from '@ant-design/icons';
export default function Student_Gov() {



    //   后台获取列表数据
    const [dataSource, setDataSource] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/teacher/list').then(res => {
            const value = res.data
            // console.log(value)
            setDataSource(value)
        })
    }, [])


    // 删除
    const handleDelete = (index) => {
        //index里面包含着(_id: '63e8b22bbcfed66fe3e4251a', username: '烦都烦死', profession: '学生')
        const value = index._id  //获取到_id值
        console.log(value);
        //过滤出（过滤值）=>全部值!==过滤值  /set页面重新渲染
        setDataSource(dataSource.filter((value) => index !== value))
        axios.delete('http://localhost:3000/teacher/delete/' + value).then(res => {
            const delValue = res.data.ok       //后端返回来ok：1
            if (delValue === 1) {
                <div>
                    <Alert
                        message="删除用户"
                        description="您成功删除了改用户！"
                        type="success"
                        showIcon
                    /></div>
                { console.log(delValue) }
            } else {
                <div>
                <Alert
                    message="删除用户"
                    description="您删除此用户失败！"
                    type="error"
                    showIcon
                /></div>
            }

        })
    };

    const columns = [
        {
            title: '序号',
            key: 'id',
            // dataIndex:'_id'
            width: 100,
            align: 'center',
            render: (txt, record, index) => <h3>{index + 1}</h3>

        },

        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: '职业',
            dataIndex: 'profession',
            key: 'profession',
        },
        {
            title: '操作',
            dataIndex: 'active',
            key: 'active',
            render: (record, index) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(index)}>
                        <Button shape="round" icon={<DeleteTwoTone />} id='deleteBt' />
                    </Popconfirm>
                ) : null,
        }
    ]

    return (
        <>
            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 7 }} rowKey={(item) => item.id} >
            </Table>
        </>
    )

}