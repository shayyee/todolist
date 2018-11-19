import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
    return (
        <div>
            <div style={{marginLeft: 10, marginTop: 10}}>
            <Input 
                value={props.inputValue} 
                placeholder="todo info" 
                style={{width: 300,marginRight: 10}}
                onChange={props.handleInputChange}/>
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
            style={{marginLeft: 10, marginTop: 20, width: 300}}
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (<List.Item onClick={() => {props.handleDeleteItem(index)}}>{item}</List.Item>)}
            />
      </div>
       )
}

export default TodoListUI