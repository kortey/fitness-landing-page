import React from 'react'
import { HealthAndSafety } from '@mui/icons-material'

const ProgramsCard = ({icon,subHeading,description}) => {
  return (
    <div className="programCard">
       <h1 className='programs-icon'>{icon}</h1>
       <h5>{subHeading}</h5>
      <small>{description}</small>
    </div>
  )
}

export default ProgramsCard
