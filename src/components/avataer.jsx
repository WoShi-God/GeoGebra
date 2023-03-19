import React from 'react'
import { Avatar, Dropdown } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
export default function avataer() {
  const [Img, setImg] = useState(null)
  useEffect(() => {
    const id = localStorage.getItem('_id');
    axios.get('http://localhost:3000/avatar/find/' + id).then(res => {
      const value = res.data
      setImg(value)
    })
  }, [])
  const items = [
    {
      key: '1',
      label: (<span onClick={() => {
        localStorage.removeItem('_id')
        location.href = '/#/login'
      }}>退出登录</span>),
    },
  ]
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Avatar style={{ backgroundColor: 'rgb(191, 191, 191)' }}
          src={Img? <img src= {Img}/>:<img src='http://pic.imeitou.com/uploads/allimg/2021072114/guuzkqkvna5.jpg' />} //必须要URL格式http://localhost:3000/public/avatar/图片名
          size="large"
          className='Tou'
          draggable='false'
        />
      </Dropdown>
    </div>
  )
}
