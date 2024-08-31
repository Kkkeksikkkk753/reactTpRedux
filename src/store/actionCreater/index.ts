import * as UserActionCreators from './todo'
import * as TodoActionCreater from './user'

export default {
    ...TodoActionCreater, ...UserActionCreators
}