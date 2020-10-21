import { Form, Input, Button, Checkbox, Card } from 'antd';
import React from 'react'
import "./login.css"

import { setToken } from "../utils/auth";


function Login(props) {
    const onFinish = (values) => {
        console.log('Success:', values);
        const value = JSON.stringify(values)
        setToken(value)
        props.history.push("/admin")
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card className="login">
            <h1>项目管理平台</h1>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="账号"
                    name="user"
                    rules={[
                        {
                            required: true,
                            message: '请输入账号!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit" style={{ margin: "0 auto", display: 'block' }}>登录</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Login

