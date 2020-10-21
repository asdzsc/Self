import React from 'react'
import { withRouter } from "react-router-dom";
import { Card, Table, Button, Popconfirm } from 'antd';

function List(props) {
    const columns = [
        {
            title: "序号",
            key: "id",
            width: 80,
            align: "center",
            render: (txt, record, index) => index + 1
        }, {
            title: "名字",
            dataIndex: "name"
        }, {
            title: "价格",
            dataIndex: "price"
        }, {
            title: "操作",
            dataIndex: "address",
            render: (txt, record, index) => {
                return (
                    <div>
                        <Button type="primary">修改</Button>
                        <Popconfirm
                            title="确定删除此项？"
                            okText="确定"
                            cancelText="取消"
                            onCancel={() => { console.log("用户取消删除"); }}
                            onConfirm={() => {
                                console.log("用户确认删除");
                                // 调用api
                            }} >
                            <Button type="danger" style={{ marginLeft: "3rem" }}>删除</Button>
                        </Popconfirm>

                    </div>
                )
            }
        }
    ]
    const data = [
        {
            key: '1',
            name: 'John Brown',
            price: '￥300,000.00',
        },
        {
            key: '2',
            name: 'Jim Green',
            price: '￥1,256,000.00',
        },
        {
            key: '3',
            name: 'Joe Black',
            price: '￥120,000.00',
        }
    ]

    return (
        <Card
            title="商品列表"
            extra={<Button type="primary" size="middle" onClick={() => props.history.push("/admin/products/edit")}>新增</Button>} >
            <Table columns={columns} dataSource={data} bordered />
        </Card >
    )
}
export default withRouter(List)