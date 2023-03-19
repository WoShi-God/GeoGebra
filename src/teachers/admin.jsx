import React, { useState } from 'react';
import { Layout, Menu, theme, Avatar, Tooltip } from 'antd';
import './css/admin.css'
import HomeWorkUpload from './page/homeworkupload'
import MoudelShow from '../components/modelout'
import StudentGov from './page/student-gov'
import HomeWorkList from './page/homeworklist';
import UserAdmin from './page/user-admin'
import Avatars from '../components/avataer'; //引入的是头像组件
import GeBlock from '../models/图形计算器';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GoldenFilled,
  ControlFilled,
  ReadFilled,
  SettingFilled,
  UserOutlined,
  EditFilled,
  CodeSandboxSquareFilled,
} from '@ant-design/icons';
// import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
// 模型组件引入
import M3 from '../models/圆锥截面'
import M2 from '../models/圆锥体三视图'
import M1 from '../models/长方体三视图'
import M4 from '../models/球体三视图'
import M5 from '../models/台体三视图'
import M6 from '../models/三角体三视图'
import M7 from '../models/正方体旋转对称'
import M8 from '../models/平面截距式'
import M9 from '../models/堆叠立方体'
import M10 from '../models/四面体棱锥外接球'
import M11 from '../models/正四面体反射对称'
import M12 from '../models/分解角柱'
import M13 from '../models/旋转体'
import M14 from '../models/分割法'
import M15 from '../models/截面法求体积'
import M16 from '../models/圆柱截方'
import M17 from '../models/穿越球'
import M18 from '../models/分段函数旋转曲面'
import M19 from'../models/原子模型'
import M20 from '../models/斜面物体受力'
// 左侧边栏选项设置
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('学生管理', '1', <ControlFilled />),
  // getItem('作业发布', '2', <ReadFilled /> ),
  getItem('模型展示', '4', <GoldenFilled />),
  getItem('模型列表', 'sub2', <CodeSandboxSquareFilled />, [
    getItem('模型1', '10'),
    getItem('模型2', '11'),
    getItem('模型3', '12'),
    getItem('模型4', '13'),
    getItem('模型5', '14'),
    getItem('模型6', '15'),
    getItem('模型7', '16'),
    getItem('模型8', '17'),
    getItem('模型9', '18'),
    getItem('模型10', '19'),
    getItem('模型11', '20'),
    getItem('模型12', '21'),
    getItem('模型13', '22'),
    getItem('模型14', '23'),
    getItem('模型15', '24'),
    getItem('模型16', '25'),
    getItem('模型17', '26'),
    getItem('模型18', '27'),
    getItem('模型19', '28'),
    getItem('模型20', '29'),
  ]),
  getItem('图形计算器','5',< EditFilled/>),
  getItem('用户设置', '6', <SettingFilled />),

];

function Teachers() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 页面小组件状态

  const [key, setKey] = useState('1');

  const showContent = () => {
    if (key === '1') {
      return <StudentGov />
    }
    else if (key === '5') {
      return <GeBlock />
    }
    else if (key === '3') {
      return <HomeWorkList />
    }
    else if (key === "4") {
      return <MoudelShow />
    }
    else if (key === "6") {
      return <UserAdmin />
    }
    else if (key === '10') {
      return <M1 />
    }
    else if (key === '11') {
      return <M2 />
    }
    else if (key === '12') {
      return <M3 />
    }
    else if (key === '13') {
      return <M4 />
    }
    else if (key === '14') {
      return <M5 />
    }
    else if (key === '15') {
      return <M6 />
    }
    else if (key === '16') {
      return <M7 />
    }
    else if (key === '17') {
      return <M8 />
    }
    else if (key === '18') {
      return <M9 />
    }
    else if (key === '19') {
      return <M10 />
    }
    else if (key === '20') {
      return <M11 />
    }
    else if (key === '21') {
      return <M12 />
    }
    else if (key === '22') {
      return <M13 />
    }
    else if (key === '23') {
      return <M14 />
    }
    else if (key === '24') {
      return <M15 />
    }
    else if (key === '25') {
      return <M16 />
    }
    else if (key === '26') {
      return <M17 />
    }
    else if (key === '27') {
      return <M18 />
    }
    else if (key === '28') {
      return <M19 />
    }
    else if (key === '29') {
      return <M20 />
    }



    console.log(key.key);
  }

  const colors = [
    '#2db7f5'
  ];

  return (
    <Layout className='Layout' style={{
      minHeight: '100vh',
      minWidth: '100vh',
    }}>
      <Sider trigger={null} collapsible collapsed={collapsed} className='SideM'
       style={{ backgroundColor: 'white', overflowY:'auto', overflowX:'hidden', }}>
        {/* 侧边栏的logo */}
        <div className="logo" >
          {/* logo切换三目判断 */}
          {
            collapsed ? (
              <img
                // src="https://ts1.cn.mm.bing.net/th/id/R-C.b57799cf889f59f1c71ea7dfae033c3f?rik=K45WnMxToN4F%2fg&riu=http%3a%2f%2fwww.logoinspirations.co%2fwp-content%2fuploads%2f2017%2f07%2fletter-g-logo.jpg&ehk=KlvTp7LGGey6MbCRnLZHOBCRdFY%2fLtZO7VgGcDlEuok%3d&risl=&pid=ImgRaw&r=0"
                src='https://geometryvictoria.ca/wp-content/uploads/2019/07/Geometry-logo-colour-vertical-1.jpg'
                width="75"
                alt="logo"
              />
            ) : (
              <img 
                src="https://ts1.cn.mm.bing.net/th/id/R-C.aa2bbc66524533543876eac397de0215?rik=5z8FO41CXqqVuQ&riu=http%3a%2f%2fzgh.com%2fwp-content%2fuploads%2f2019%2f12%2fGEOMETRY_Logo_EN2.png&ehk=mKd7eKaHfJ8%2foX1VCvJ7t0aGqkAtAyQmUQiis59cCjM%3d&risl=&pid=ImgRaw&r=0"
                width="200"
                alt="logo"
                height='60'
              />
            )
          }
        </div>

        {/* 侧边栏菜单项 */}
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
          onClick={(item) => {
            setKey(item.key)
          }}

        />
      </Sider>

      {/* 右边的区域内容 */}
      <Layout className="site-layout">
        {/* 右边头部信息 */}
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {/* 判断收放图标切换 */}
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}

          {/* 头像 */}
          <Avatars/>
        </Header>


        {/* 右边中间内容区域 */}
        <Content
          style={{
            margin: '24px 16px',
            padding: key === '4' ? 0 : 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {showContent()}
        </Content>
        <div className='footer'>
          <h4>基于React的几何辅助教学设计与实现</h4>
        </div>
      </Layout>
    </Layout>
  );
};
export default Teachers;