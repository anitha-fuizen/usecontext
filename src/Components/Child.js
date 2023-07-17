import React from 'react'
import { context } from '../App'
function Child() {
    const theme=React.useContext(context)
  return (

    <div className={theme?"dark":"light"}>{"theme"}</div>

  )
}

export default Child