import React, { useContext } from 'react'
import { context } from '../App'

function Theme() {
   const {theme1,toggle}=React.useContext(context)
  return (
    <>
    <div>{theme1}</div>
    <button onClick={toggle}>get</button>
    </>
  )
}

export default Theme