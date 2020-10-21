import React from 'react'
import { Card, Form, Input, Button } from 'antd';


function Edit() {
    const [form] = Form.useForm();

    const priceValidate = (rule, value, callback) => {
        if (value * 1 > 100) {
            callback("价格不能大于100")
        } else {
            callback()
        }
    }

    const onFinish = (values) => {
        // 执行成功后的函数
        console.log(values);
    };
    const onFinishFailed = (values) => {
        // 执行失败后的函数
        console.log(values);

    }


    return (
        <Card title="商品编辑">
            <Form form={form} name="control-hooks" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item
                    name="名字"
                    label="名字"
                    rules={[
                        {
                            required: true,
                            message: '请输入商品名字'
                        },
                    ]}
                >
                    <Input placeholder="请输入商品名字" />
                </Form.Item>
                <Form.Item
                    name="价格"
                    label="价格"
                    rules={[
                        {
                            required: true,
                            message: '请输入商品价格'
                        },
                        { validator: priceValidate }
                    ]}
                >
                    <Input placeholder="请输入商品价格" />
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) => {
                        return getFieldValue('gender') === 'other' ? (
                            <Form.Item
                                name="customizeGender"
                                label="Customize Gender"
                                rules={[
                                    {
                                        required: true,
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null;
                    }}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">保存</Button>


                </Form.Item>
            </Form>
        </Card >
    );
}

export default Edit


