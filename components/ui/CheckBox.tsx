import Link from 'next/link'
import React from 'react'

export interface handleInput {
  ( e: React.ChangeEvent<HTMLInputElement> ): void;
}

export default function CheckBox(
  props: { 
    lableText: string, 
    isArrow: boolean, 
    inputName: string, 
    link: string, 
    value?: boolean
    handler?: handleInput
  }) {
 
  return (
    <div className='form-group'>
      <div className='left-form'>
      <input 
        type="checkbox" 
        id="tos-agree" 
        name={props.inputName} 
        onChange = { props.handler && props.handler } 
        checked = { props.value && props.value }
      />
      <label>{props.lableText}</label>
      </div>
      <Link href={props.link && props.link}>
        {
          props.isArrow && <img className="arrow" src="./assets/images/icons/arrow-point-to-right.png"/>
        }
      </Link>
    </div>
  )
}
