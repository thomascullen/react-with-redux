import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

const appReducer = combineReducers({
  routing
})

export default appReducer
