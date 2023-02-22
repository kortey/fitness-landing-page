import React from 'react'
import FoodImage1 from "../assets/images/food1.png"
import YellowButton from './YellowButton'

const Menu = ({image,subHeading}) => {
  return (
    <div className='menu-item'>
       <div className='menu-image-container'>
        <img src={image} alt="food" />
       </div>
       <h4>{subHeading}</h4>
       <YellowButton text="Try Now"/>
    </div>
  )
}

export default Menu
