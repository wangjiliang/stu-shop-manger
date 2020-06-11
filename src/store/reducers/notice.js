import actionTypes from '../actionTypes'
const defaultState = {
  isAllRead: false,
  count: 8
}

const notice = (state=defaultState, action) => {
  switch(action.type) {
    case actionTypes.READ_ALL:
      return { ...state, isAllRead: true}
    default:
      return state
  }
}

export default notice;
