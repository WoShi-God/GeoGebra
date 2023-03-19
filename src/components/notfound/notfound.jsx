import React from "react";
import { Result } from 'antd';

// 页面路径无法找到时显示
export default function NotFound () {
    return (
        <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        style={{
            width:1535,
            height: 745,
            margin:0,
            padding: 0,
            backgroundColor:'rgb(255, 255, 255)',
            paddingTop:150,
        }}
      />
      
    )
}