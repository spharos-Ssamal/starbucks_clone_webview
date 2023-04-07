import React from 'react'

export default function SearchHashtagButton<searchKeyWordType>(props: {tagTitle:string}) {
  return (
    <div>
      <button className="tag-list-item">
        #{props.tagTitle}
      </button>
    </div>
  )
}
