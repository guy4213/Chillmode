import React from "react"
import "./Button.scss"
export const Button = (props:any) => {
  return (
    <div><button className={props.class}>
    

    <span className="text">{props.text}</span>
</button></div>
  )
}
