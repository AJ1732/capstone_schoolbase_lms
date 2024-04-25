export const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_USERS':
      return {
        users: payload
      }
  
    case 'CREATE_USER':
      return {
        users: [payload, ...state.users]
      }
  
    case 'DELETE_USER':
      return {
        users: state.users.filter((u) => u._id !== payload._id)
      }
  
    default:
      return state;
  }
}