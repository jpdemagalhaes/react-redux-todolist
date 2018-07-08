import React from 'react'
import { connect } from 'react-redux'

const Counter = (props) => (
  <h2>You have {props.todos.length} todo{props.todos.length > 1 && 's'}</h2>
)

const mapStateToProps = state => ({
  todos: state.todos,
})

export default connect(mapStateToProps)(Counter)
