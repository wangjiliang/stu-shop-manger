import React, { useState, useEffect } from 'react'
import { Form, Input, Card, Button, message } from 'antd'
import { getById, modifyApi, createApi } from '../../../service/product'

function Edit(props) {
  console.log(props)
  const [current, setCurrent] = useState({})
  useEffect(() => {
    //如果是修改商品则进入页面时先获取要修改商品的信息
    if (props.match.params.id) {
      getById(props.match.params.id).then( res => {
        setCurrent(res.data)
      })
    }
  },[])
  
  //表单验证成功的执行函数
  const onFinish = (values) => {
    if (props.match.params.id) {
      //修改
      modifyApi(props.match.params.id, values).then (res => {
        props.history.push('/admin/products')
      }).catch( error => {
        console.log(error)
      })
    } else {
      // 增加
      createApi(values).then (res => {
        props.history.push('/admin/products')
      }).catch( error => {
        console.log(error)
      })
    }
  }
  //表单验证失败的执行函数
  const onFinishFailed = () => {
    message.error('保存失败！')
  }
  return (
    <Card title='商品编辑' 
      extra={<Button onClick={() => props.history.push('/admin/products')} size='small'>返回</Button>}
    >
      <Form onFinish={onFinish}   onFinishFailed={onFinishFailed} >
        <Form.Item label='商品名称' 
          name='productname' 
          rules={[ { required: true, message: '请输入商品名字!' } ]} 
          initialValue={current.name}
        >
          <Input placeholder='请输入商品名字' />
        </Form.Item>
        <Form.Item  label='商品价格' name='price' initialValue={current.price}
          rules={[
            { required: true, message: '请输入商品价格!' },
            { validator:(_, value) => value < 100 ? Promise.resolve() : Promise.reject('商品价格不能大于100') }
          ]}
        >
          <Input placeholder='请输入商品价格' />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit"  >保存</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Edit
