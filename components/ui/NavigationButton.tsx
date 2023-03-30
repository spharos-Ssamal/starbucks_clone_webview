import React from 'react'
import { useRouter } from 'next/router'

export default function NavigationButton(props: {link?: string, heading: "left" | "right"}) {

  const router = useRouter();

  const handleRouter = () => {
    if(props.link) {
      router.push(props.link);
      return;
    }
    router.back();
  }

  return (
    <div onClick={handleRouter} className={props.heading === 'right' ? "right-pos" : ""}>
      <img src="/assets/images/icons/left.png" className="back-button" />
    </div>
  )
}
