import React from 'react'
import WrapperStyles from './wrapper.module.css'

export default ({ children }) => (
  <div className={WrapperStyles.wrapper}>{children}</div>
)
