
const initState = {
  list: [],
  page: 1,
  total: 0
}

const product = (state=initState, action) => {
  switch(action.type) {
    case 'PRODUCT_LOADED':
      console.log(action)
      return { ...state }
    default:
      return state
  }
}

export default product;

