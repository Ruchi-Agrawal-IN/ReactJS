import React from 'react'
import { ButtonHTMLAttributes } from 'react';
interface Props{
    children: string;
    // color?: string;
    // ? making color an optional property and  than below we are assigning some fix values for color property
    color?: 'primary' | 'secondary' | 'danger';
    onButtonClick: () => void;
}

const Button = ({children, onButtonClick, color = 'primary'}: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onButtonClick}>{children}</button>
  )
}

export default Button