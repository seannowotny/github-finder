//#region Imports
import React, { useReducer } from 'react';

import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import { SET_ALERT, REMOVE_ALERT } from '../types';

import type { AlertContents } from '../../components/layout/Alert';
//#endregion

//#region Types
export type State = ?{|
  alert: AlertContents
|};

type Props = {|
  children: any
|};
//#endregion

const AlertState = (props: Props) => 
{
  const initialState: State = null;

  const [state, dispatch]: [State, any] = useReducer(AlertReducer, initialState);

  //Set Alert
  const setAlert = (msg: string, type: string) =>
  {
    dispatch({
      type: SET_ALERT, 
      payload: { msg, type }
    });
    
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  }

  return <AlertContext.Provider
    value={{
      alert: state,
      setAlert
    }}
  >
    {props.children}
  </AlertContext.Provider>
}

export default AlertState;
