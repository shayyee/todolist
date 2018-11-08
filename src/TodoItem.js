import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  static defaultProps = {
    prefix: 'todo'
  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
  render() {
    const { content, prefix } = this.props
    return (
      <div
        onClick={this.handleClick}>
        {prefix} - {content}
        </div>
    )
  }
}

TodoItem.propTypes = {
  prefix: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem;