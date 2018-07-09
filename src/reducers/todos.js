export default function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO': {
      const todos = [ ...state, { id: Math.random(), text: action.text } ]
      localStorage.setItem('todos', JSON.stringify(todos))
      return todos
    }
    case 'REMOVE_TODO': {
      const arr = [ ...state ]
      const index = arr.findIndex(obj => obj.id === action.todo.id)
      const todos = [ ...arr.slice(0,index), ...arr.slice(index+1) ]
      localStorage.setItem('todos', JSON.stringify(todos))
      return todos
    }
    case 'LOAD_TODOS':
      return action.todos
    default:
      return state
  }
}
