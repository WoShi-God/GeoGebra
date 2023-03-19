import React,{useEffect,useState} from 'react'
import { Space, Table, Tag,Button } from 'antd';
import axios from 'axios';
import { DownloadOutlined } from '@ant-design/icons';

export default function HomeWorkList() {
  // const[data ,setData]= useState([])
  // useEffect(()=>{
  //   axios.get('http://localhost:3000/teacher/worklist').then(res=>{
  //         console.log(res.data)
  //         setData(res.data)
  //   })
  // },[])
  const columns = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
          dataIndex: 'active',
          key: 'active',
          render: () => {
              return <div>
                  <Button type="primary" shape="round" icon={<DownloadOutlined />} size={26} />
              </div>
          }
    },
  ];
  
  return (
    <div>
       <Table columns={columns} dataSource={data} pagination={{pageSize:7}} />;
    </div>
  )
}
