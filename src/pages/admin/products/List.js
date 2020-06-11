import React, { useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'
import {Card, Table, Button, Popconfirm } from 'antd'
import { listApi, deleteApi } from '../../../service/product'

const dataSource = [
  {
    key:1,
    name: '香皂',
    price: 3,
    onSale: true
  },
  {
    key:2,
    name: '特伦苏',
    price: 6,
    onSale: false
  },
  {
    key:3,
    name: '小浣熊',
    price: 1.5,
    onSale: true
  },
  {
    key:4,
    name: '小浣熊',
    price: 5,
    onSale: true
  },
  {
    key:5,
    name: '小浣熊',
    price: 11,
    onSale: true
  },
  {
    key:6,
    name: '小浣熊',
    price: 2,
    onSale: true
  },
  {
    key:7,
    name: '小浣熊',
    price: 1.5,
    onSale: true
  }
]

function List(props) {
  const [source, setSource] = useState([])

  useEffect( () => {
    listApi().then( res => {
      // 设置表格数据
      setSource(res.data)
    }).catch( err => {
      console.log(err)
    })
  },[])
  const loadData = page => console.log(page)
  const columns = [
    {
      title: '序号',
      key: 'id',
      width: 80,
      align: 'center',
      render: (text, record, index) => index + 1
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
      title: '是否在售',
      dataIndex: 'onSale',
      render: (text, record, index) => record.onSale ? '在售' : '已下架'
    },
    {
      title: '',
      render: (text, record, index) => {
        return (
          <div>
            <Button type='primary' size='small'
              onClick= { () => {
                props.history.push(`/admin/products/edit/${record.key}`) //路由跳转携带参数
              }}
            >修改</Button>
            <Popconfirm title='确定删除此项?' 
              onCancel={() => console.log('用户取消删除')} 
              onConfirm={() => {
                deleteApi(record.key).then (res => {
                  // 重新加载数据
                }).catch(error => {
                  console.log(error)
                })
              }} 
            >
              <Button type='danger' size='small' style={{margin: '0 1rem'}} >删除</Button>
            </Popconfirm>
          </div>
        )
      }
    }
  ]
  return (
    <Card title='商品列表' extra={<Button type='primary' onClick={() => props.history.push('/admin/products/edit')} size='small'>增加</Button>}
      
    >
      <Table columns={columns} bordered dataSource={dataSource} pagination={{pageSize :2,total: 7, onChange : loadData}} />
    </Card>
  )
}

export default withRouter(List)
