import { SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_IS_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
  GET_USERS } from '../types';

import type { State } from './GithubState';
import type { Type } from '../types';

export type ActionType = {
  type: Type;
  payload: any
}

export default (state: State, action: ActionType): State => 
{
  switch(action.type)
  {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        isLoading: false
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}