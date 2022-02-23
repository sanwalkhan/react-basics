import { useState } from 'react'
import React from 'react'

export const DataArray = () => {


   const [obj , setobj ] = useState({
    NAME: 'Sanwal '  , AGE : 23 , DEGREE : 'BSSE ' })

    const changeobj = () => {
    setobj( {...obj, NAME : 'Sanwal Khan' , DEGREE : 'BSCS'})
       }

  return (
    <div>
   <h1>
   Name : {obj.NAME} & Age : {obj.AGE} & Degree : {obj.DEGREE}
   </h1>
    <button onClick={ changeobj}>Update</button>
    </div>
  )
}
