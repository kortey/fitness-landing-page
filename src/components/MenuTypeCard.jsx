import React from 'react'


const MenuTypeCard = ({icon,subHeading}) => {
  return (
    <div className='menu-type-card'>
      <h1>{icon}</h1>
      <h4>{subHeading}</h4>
    </div>
  )
}

export default MenuTypeCard
