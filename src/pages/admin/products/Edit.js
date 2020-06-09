import React from 'react'
import { Form, Input, Card, Button, message } from 'antd'

function Edit() {
  //表单提交成功的执行函数
  const onFinish = (values) => {
    console.log(values)
    message.success('保存成功！')
  }
  //表单提交失败的执行函数
  const onFinishFailed = () => {
    message.error('保存失败！')
  }
  return (
    <Card title='商品编辑'>
      <Form onFinish={onFinish}   onFinishFailed={onFinishFailed} >
        <Form.Item label='商品名称' name='productname' rules={[ { required: true, message: '请输入商品名字!' } ]} >
          <Input placeholder='请输入商品名字' />
        </Form.Item>
        <Form.Item  label='商品价格' name='price'
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
