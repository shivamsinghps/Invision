import { combineReducers } from 'redux'
import ui from './reducers/ui'

const rootReducer = combineReducers({
	ui: ui
})

export default rootReducer
