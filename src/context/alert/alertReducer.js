import { SET_ALERT, REMOVE_ALERT } from '../types';

import type { State } from './AlertState';
import type { AlertType } from '../types';

export type ActionType = {
  type: AlertType;
  payload: any
}

export default(state: State, action: ActionType): State =>
{
  switch(action.type) 
  {
    case SET_ALERT:
      return action.payload; 
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
}