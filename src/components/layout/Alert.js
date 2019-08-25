import React from 'react'

import type { Element } from 'react';

export type AlertContents = ?{|
  msg: string, 
  type: string
|} 

type AlertProps = {|
  alert: AlertContents
|}

const Alert = ({ alert }: AlertProps): null | Element<string> => {
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
