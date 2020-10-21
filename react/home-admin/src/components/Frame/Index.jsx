import React from 'react'
import { Layout, Menu, Dropdown, Avatar, message } from 'antd';
import { withRouter } from "react-router-dom";

import {
    DownOutlined
} from '@ant-design/icons';
import { adminRoutes } from "../../routes/index";
import './index.css'

import { clearToken, getToken } from '../../utils/auth'
const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route => route.isShow)


function Index(props) {
    console.log(props);
    const name = getToken()
    console.log(name);


    const menu = (
        <Menu onClick={(p) => {
            if (p.key === "loginOut") {
                props.history.push("/login")
                clearToken()
            } else {
                message.info(p.key)
            }
        }}>
            <Menu.Item key="notice">通知中心</Menu.Item>
            <Menu.Item key="setting">设置</Menu.Item>
            <Menu.Item key="loginOut">退出</Menu.Item>
        </Menu>
    );
    return (
        <Layout>
            <Header className="header" style={{ color: "#fff", fontSize: "24px" }}>
                <div>项目管理平台</div>
                <Dropdown overlay={menu}>
                    <div>
                        <Avatar>U</Avatar>
                        <span>_维护经理</span>
                        <DownOutlined style={{ fontSize: "25px", verticalAlign: "middle", marginLeft: "10px" }} />
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
                            routes.map(route => {
                                return (<Menu.Item key={route.path} onClick={p => props.history.push(p.key)}>
                                    {route.title}
                                </Menu.Item>)
                            })
                        }
                    </Menu>
                </Sider>
                <Layout style={{ padding: '16px', background: "#fff", border: "10px solid #f7f7f7" }}>

                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout >
    )
}

export default withRouter(Index)

