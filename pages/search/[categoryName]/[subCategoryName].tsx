import { useRouter } from 'next/router'
import React from 'react'

export default function Search() {
  const router = useRouter();
  console.log(router.query)
  return (
    <div style={{marginTop:"130px"}}>
      <h2></h2>
    </div>
  )
}
