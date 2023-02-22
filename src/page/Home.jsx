import React from 'react'
import Navbar from '../components/Navbar'
import YellowButton from '../components/YellowButton'
import ProgramsCard from '../components/ProgramsCard'
import ValueCards from '../components/ValueCards'
import MenuTypeCard from '../components/MenuTypeCard'
import Menu from '../components/Menu'
import TestimonialsCard from '../components/TestimonialsCard'
import Footer from '../components/Footer'


import heroImage from "../assets/images/img1.png"
import valuesImage from "../assets/images/image2.png"
import TestimonialsImage from "../assets/images/img3.png"
import FoodImage1 from "../assets/images/food1.png"
import FoodImage2 from "../assets/images/food2.png"

import { PlayArrow } from '@mui/icons-material'
import { Star } from '@mui/icons-material'
import { HeartBroken } from '@mui/icons-material'
import { Flag } from '@mui/icons-material'
import { MenuBook } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { HealthAndSafety } from '@mui/icons-material'
import { TimeToLeave } from '@mui/icons-material'

import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

import DiamondIcon from '@mui/icons-material/Diamond';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import StarIcon from '@mui/icons-material/Star';

import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import TelegramIcon from '@mui/icons-material/Telegram';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HttpsIcon from '@mui/icons-material/Https';


const Home = () => {
  return (
    <div className='home'>
     <div className='header'>
      <Navbar />
      <div className='hero-section'>
          <div className='hero-left'>
             <h2>Changing your <span>eating</span> habits</h2>
             <p>Always take care of your health starting from the food that you consume everyday</p>
             <div className='hero-left-buttom'>
               <YellowButton text="Explore Menu"/>
               <div style={{display:"flex",alignItems:"center",color:"white",gap:"10px"}}>
                 <PlayArrow sx={{color:"yellow",}}/><small>Watch Video</small>
               </div>
               
             </div>
          </div>
          <div className='hero-right'>
            <div className='image-container'>
              <img src={heroImage} alt="hero-image" className='hero-image'/>
            </div>
            
          </div>
      </div>
     </div>
      {/* end of header, hero section and navbar */}
        
      <section className='programs-section'>
        <div className='program-header'>
          <Star className="star"/>
          <h2>Our Best Programs</h2>
        </div>
        
        <div className='programs'>
          <ProgramsCard 
          icon={<EmojiFoodBeverageIcon />}
          subHeading="Healthy Recipe"
          description="Helthier Recipes,from food & nutrition experts"
          
          />
          <ProgramsCard 
          icon={<FastfoodIcon />}
          subHeading="Healthy Meals"
          description="Learn how to become a meal planing pro"
          />
          <ProgramsCard           
          icon={<LocalDiningIcon />}
          subHeading="Healthy Eating"
          description="Eat healthy with our experts & inspirational tips"
          />
          <ProgramsCard           
          icon={<HealthAndSafety />}
          subHeading="Healthy Lifes"
          description="Your life is your choice, make your self healthier"
          />
        </div>
       
       

      </section>
      {/* end of programs section */}
      <section className='values-section'>
        <div className='values-section-left'>
           <div className='values-image-container'>
              <img src={valuesImage} alt="" />
           </div>
        </div>
        <div className='values-section-right'>
            <div className='values-headers'>
              <h1 className='icon-header'><DiamondIcon className='heartborken'/><h1>Our Value To Help You</h1></h1>
              <p>we always want to provide the best value for you and your health,join us to maximise the benefits</p>
              <div className="values-components">
                  <ValueCards 
                  icon={< FavoriteIcon />}
                  subHeading="Become Healthier"
                  description="imune system is stronger if the body is helthier"
                  />
                  <ValueCards 
                  icon={< EnergySavingsLeafIcon  />}
                  subHeading="Increase Energy"
                  description="Having enough energy can help cary out routine"
                  />
                  <ValueCards 
                  icon={ <CheckBoxIcon  />}
                  subHeading="Controlling Weight"
                  description="Body will feel lighterand will not be easily tired"
                  />
                  <ValueCards 
                  icon={<StarIcon  />}
                  subHeading="Becomes Happier"
                  description="Living a healthy life also increase self-confidence"
                  />
              </div>
            </div>
        </div>

      </section>
      {/* get started section */}
      <section className='get-started-section'>
        <h1><Flag /></h1>
        <h3>Get Started With <span>Dietly</span> </h3>
        <p>Discover tips & news for your health from experts and get the best discounts by getting started</p>
        <YellowButton text="Get Started"/>
      </section>
     {/* try our menu section */}
       <section className='our-menu-section'>
         <div className='menu-header'>
           <div className='icon-header'>
            <h1 className='icon'><MenuBook /></h1>
            <h1 className='menu-header-header'>Try Our Healthy Menu</h1>
           </div>
           <p>We provide a variety of healthy recipes that have been curated by our best nutritionists for you</p>
         </div>
         <div className='menu-section-main'>
            <div className='menu-section-left'>
                <MenuTypeCard 
                icon={<FreeBreakfastIcon />}
                subHeading="Breakfast Recipes"
                />
                <MenuTypeCard 
                icon={<TelegramIcon />}
                subHeading="Low Calorie recipes"
                />
                <MenuTypeCard                 
                icon={<CalendarMonthIcon />}
                subHeading="Holiday Recipes"
                />
                <MenuTypeCard                 
                icon={<HttpsIcon />}
                subHeading="Restrictional Recipies"/>
            </div>
            <div className='menu-section-right'>
              <Menu 
               image={FoodImage1}
               subHeading="Lorem ipsum dolor sit amet"
              /> 
              <Menu 
              image={FoodImage2}
              subHeading="Lorem ipsum dolor sit amet"
              /> 
            </div>
         </div>
       </section>
       {/* done with menu section */}
       <section className='testimoniams-section'>
         <div className='testimonials-section-left'>
            <div className='testimonials-image-containner'>
              <img src={TestimonialsImage} alt="client profile" />
            </div>
         </div>
         <div className='testimonials-section-right'>
            <div className='testimonials-section-header'>
              <div className='icon-header'>
                <h1 className='icon'><Email /></h1>
                <h2>Testimonials About Us</h2>
              </div>
              <p>In the smallest case we always give your best,find out 
                what other users have to say about us
              </p>
            </div>
            <div className='user-testimonials'>
               <TestimonialsCard />
            </div>
         </div>
       </section>
       <section className='footer-section'>
         <Footer />
       </section>
    </div>
  )
}

export default Home
