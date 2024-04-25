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
  
    default:
      return state;
  }
}