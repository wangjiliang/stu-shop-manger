import React from 'react'
import { withRouter } from 'react-router-dom'

import { Layout, Menu } from 'antd';
import { AreaChartOutlined } from '@ant-design/icons';
import { adminRoutes } from '../../routes'

import logo from './logo.png'

const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route => route.isShow)

function Index(props) {
  return (
    <Layout>
      <Header className="header"  >
        <div className="logo" >
          <img src={logo} alt='logo' />
        </div>
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
