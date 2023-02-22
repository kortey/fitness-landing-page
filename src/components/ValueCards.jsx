import React from 'react'
import { HeartBroken } from '@mui/icons-material'

const ValueCards = ({icon,subHeading,description}) => {
  return (
    <div className='valueCard'>
       <h1 >{icon}</h1>
        <h4>{subHeading}</h4>
        <p>{description}</p>
    </div>
  )
}

export default ValueCards
