import React, { useContext } from 'react'

import AlertContext from '../../context/alert/alertContext';

import type { Element } from 'react';

export type AlertContents = ?{|
  msg: string, 
  type: string
|} 

export type AlertType = {|
  alert: AlertContents
|}

const Alert = (): null | Element<string> => {
  const { alert }: AlertType = useContext(AlertContext);

  if(alert)
  {
    const {type, msg}: $NonMaybeType<AlertContents> = alert;
      return (
        alert && (
          <div className={`alert alert-${String(type)}`}>
            <i className="fas fa-info-circle"></i> {msg}
          </div>
      )
    )
  }
  else
  {
    return null;
  }
}

export default Alert
