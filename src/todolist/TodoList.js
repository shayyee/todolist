import React, {Component, Fragment} from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from '../store';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange)
  }
  handleInputChange(e) {
    const action = {
      type: 'CHANGE_INPUT_VALUE',
      value: e.target.value
    }
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = {
      type: 'ADD_TODO_ITEM'
    }
    store.dispatch(action)
  }
  render() {
    return (
      <Fragment>
        <div style={{marginLeft: 10, marginTop: 10}}>
          <Input 
            value={this.state.inputValue} 
            placeholder="todo info" 
            style={{width: 300,marginRight: 10}}
            onChange={this.handleInputChange}/>
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{marginLeft: 10, marginTop: 20, width: 300}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </Fragment>
    )
  }
}

export default TodoList;
