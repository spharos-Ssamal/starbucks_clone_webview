import React from 'react'

export default function DeletableSearchLog<searchLogType>(props: {logName:string, dispatch }) {
  return (
    
    <div className="keywords">
      {props.logName}
      <div onClick={() => {
        dispatch({type: 'delete-log', payload: {keyword}})
      }}>
        <img src="assets/images/icons/close.png" />
      </div>
    </div>
  )
}
