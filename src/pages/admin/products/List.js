import React from 'react'
import { withRouter } from 'react-router-dom'
import {Card, Table, Button, Popconfirm } from 'antd'

const dataSource = [
  {
    key:1,
    name: '香皂',
    price: 3
  },
  {
    key:2,
    name: '特伦苏',
    price: 6
  },
  {
    key:3,
    name: '小浣熊',
    price: 1.5
  }
]
function List(props) {
  const columns = [
    {
      title: '序号',
      key: 'id',
      width: 80,
      align: 'center',
      render: (text, row, index) => index + 1
    },
    {
      title: '名字',
      dataIndex: 'name'
    },
    {
      title: '价格',
      dataIndex: 'price'
    },
    {
      title: '',
      render: (txt, row, index) => {
        return (
          <div>
            <Button type='primary' size='small'>修改</Button>
            <Popconfirm title='确定删除此项?' 
              onCancel={() => console.log('用户取消删除')} 
              onConfirm={() => console.log('用户确认删除')} 
            >
              <Button type='danger' size='small' style={{margin: '0 1rem'}} >删除</Button>
            </Popconfirm>
          </div>
        )
      }
    }
  ]
  return (
    <Card title='商品列表' extra={<Button type='primary' size='small'>增加</Button>}
     onClick={() => props.history.push('/admin/products/edit')} 
    >
      <Table columns={columns} bordered dataSource={dataSource} />
    </Card>
  )
}

export default withRouter(List)
