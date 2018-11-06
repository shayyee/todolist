import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleItemDelete(index) {
    const list = this.state.list.concat();
    list.splice(index,1);
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容：</label>
          <input id="insertArea"
                 className="input"
                 value={this.state.inputValue}
                 onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item,index) => {
            return (
              <div key={index}>
                <TodoItem
                  content={item}
                  index={index}
                  deleteItem={this.handleItemDelete.bind(this)}
                />
                {/*<li key={index}
                  onClick={this.handleItemDelete.bind(this, index)}
                  dangerouslySetInnerHTML={{__html: item}}
              ></li>*/}
              </div>
            )
          })}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
