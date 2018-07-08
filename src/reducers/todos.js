export default function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [ ...state, { id: Math.random(), text: action.text } ]
    case 'REMOVE_TODO':
      const arr = [ ...state ]
      const index = arr.findIndex(obj => obj.id === action.todo.id)
      return [ ...arr.slice(0,index),...arr.slice(index+1) ]
    default:
      return state
  }
}
