import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as todoActions from './actions/todos'

class TodoList extends Component {
  state = {
    newTodoText: ''
  }

  addNewTodo = () => {
    if(this.state.newTodoText === ''){
      alert('Todo cannot be empty')
      return;
    }

    this.props.addTodo(this.state.newTodoText)

    this.setState({ newTodoText: '' })
  }

  removeTodo = (todo) => {
    this.props.removeTodo(todo);
  }

  render(){
    return (
      <div>
        <ul>
          { this.props.todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={this.removeTodo.bind(this,todo)}>Remove</button>
            </li>
          )) }
        </ul>

        <input
          type="text"
          value={this.state.newTodoText}
          onChange={(e) => this.setState({ newTodoText: e.target.value })}
        />
        <button onClick={this.addNewTodo}>New Todo</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
