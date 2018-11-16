import React, { Component, Fragment } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './style.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    }
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
  render() {
    return (
      <Fragment>
        <TransitionGroup>
        {this.state.list.map((item,index) => {
          return (
            <CSSTransition
              key={index}
              timeout={1000}
              classNames="fade"
              unmountOnExit
              onEntered={(el) => {el.style.color='blue'}}
              appear={true}>
              <div>{item}</div>
            </CSSTransition>
          )
        })}
        </TransitionGroup>
        <button onClick={this.handleAddItem}>Add</button>
      </Fragment>
    );
  }
}

export default App;
