import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from './Button.styled'

const PrimaryButton = props => (
  <Button onClick={props.action}>
    {props.link ? (
      <NavLink to={props.url}>
        <p>{props.text}</p>
      </NavLink>
    ) : (
      <>{props.text}</>
    )}
  </Button>
)

export default PrimaryButton
