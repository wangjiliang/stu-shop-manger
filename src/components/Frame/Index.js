import React from 'react'
import { withRouter } from 'react-router-dom'

import { Layout, Menu, Dropdown, Avatar, message } from 'antd';
import { AreaChartOutlined, DownOutlined } from '@ant-design/icons';
import { adminRoutes } from '../../routes'

import logo from './logo.png'
import './frame.css'

const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route => route.isShow)

function Index(props) {
  const clickEvent = ({key}) => {
    switch (key) {
      case 'notice':
        message.success('点击了通知中心', 1.5);
        break;
      case 'setting': 
        message.success('点击了设置', 1.5)
        break;
      case 'logout':
        localStorage.clear();
        props.history.push('/login')
        break;
      default :
        break;
    }
  }
  const menu = (
    <Menu onClick={clickEvent}>
      <Menu.Item key='notice'>通知中心</Menu.Item>
      <Menu.Item key='setting'>设置</Menu.Item>
      <Menu.Item key='logout'>退出</Menu.Item>
    </Menu>
  )
  
  return (
    <Layout>
      <Header className="header"  >
        <div className="logo" >
          <img src={logo} alt='logo' />
        </div>
        <Dropdown overlay={menu}>
          <div>
            <Avatar>U</Avatar>
            <span style={{marginLeft: '5px'}}>超级管理员</span>
            <DownOutlined />
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {
              routes.map(route => <Menu.Item key={route.path} onClick={p => props.history.push(p.key)}>
                <AreaChartOutlined />
                {route.title}
              </Menu.Item>)
            }
          </Menu>
        </Sider>
        <Layout style={{ padding: 16 }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: "#fff"
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withRouter(Index)
