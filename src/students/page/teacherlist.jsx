import React, { useEffect } from 'react'
import { Table, Avatar } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import '../css/box.css'
export default function teacherlist() {
    
    const [data, setData] = useState(null)
    const [imge, setImg] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:3000/student/Tlist').then(res => {
            // console.log(res.data);
            setData(res.data)
        })
    }, [])

        useEffect(() => {
        axios.get('http://localhost:3000/Tlist' ).then(res => {
            const value = res.data
            console.log(value.file);
            console.log('1');
            setImg(value.file)
        })
    }, [])
    // const url = 'http://pic.imeitou.com/uploads/allimg/2021072114/guuzkqkvna5.jpg';
    const columns = [
        {
            title: '序号',
            dataIndex: 'id',
            width: 80,
            align: 'center',
            render: (txt, record, index) => <h3>{index + 1}</h3>
        },
        {
            title: '头像',
            width: 200,
            dataIndex:'file',
            align: 'center',
            render: () => <Avatar
                src={<img src={imge} /> }// alt={data.username} 
                size="large"
            />
        },
        {
            title: '姓名',
            dataIndex: 'username',
            // key: 'name',
        },
        {
            title: '职业',
            dataIndex: 'profession',
            // key: 'age',
        },
        {
            dataIndex:'_id',
            className:'tableHiddle',
        }

    ];
    return (
        <div>
            <Table dataSource={data} columns={columns} />
        </div>
    )
}
