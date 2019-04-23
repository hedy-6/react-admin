import { combineReducers } from 'redux'
import user from './user'
import { defaultRoute } from '@/config'
import { INIT_ROUTES } from '@/actions/ActionTypes'

const routes = (state = defaultRoute, action) => {
    switch (action.type) {
        case INIT_ROUTES:
          return action.routes
        default:
          return state;
      }
}

export default combineReducers({
    user,
    routes
}) 