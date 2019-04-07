import { combineReducers } from 'redux'
import {
  SELECT_DATA,  INVALIDATE_DATA,
  REQUEST_DATA,  RECEIVE_DATA, REQUEST_DATA_BY_ID, SIMILAR_ITEM_DATA
} from '../actions/MyActions'

function selectedData(state = 'listData', action) {
  switch (action.type) {
    case SELECT_DATA:
      return action.agsEazy
    default:
      return state
  }
}

function data(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    item:{}
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_DATA:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_DATA:    
    
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.data,
        lastUpdated: action.receivedAt
        
      })
      case REQUEST_DATA_BY_ID:        
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        item: action.data,
        lastUpdated: action.receivedAt
        
      })
      case SIMILAR_ITEM_DATA:    
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.data,
        lastUpdated: action.receivedAt
        
      })
    default:
      return state
  }
}

function dataRecived(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_DATA:
    case RECEIVE_DATA:
    case REQUEST_DATA:
      return Object.assign({}, state, {
        [action.agsEazy]: data(state[action.agsEazy], action)
      })
      case REQUEST_DATA_BY_ID:
      
      return Object.assign({}, state, {
        [action.agsEazy]: data(state[action.agsEazy], action)
      })
      case SIMILAR_ITEM_DATA:
      
      return Object.assign({}, state, {
        [action.agsEazy]: data(state[action.agsEazy], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
    dataRecived,
    selectedData    
})

export default rootReducer