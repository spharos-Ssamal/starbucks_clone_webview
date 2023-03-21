import React, { useState } from 'react'

export default function HeaderMenu(props: { data?: any; handleFilter?: any; }) {

  // const [data, setData] = useState<any>(props.data)
  // console.log(props.data)
  if(props.data.subCategory !== undefined) {
    console.log(props.data.subCategory)
    // setData(props.data.subCategory)
  }

  return (
    // <div className="header-bottom">
    //   <nav>
    //     <ul>
    //       {props.data.subCategory.map((menu:any) => (
    //         <li
    //           key={menu.id}
    //           onClick={() => props.handleFilter(menu.name)}
    //         >
    //           {menu.name}
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    // </div>
    1
  )
}
