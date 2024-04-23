import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import MathematicsScreen from '../Flashcard/mathematics/MathematicsScreen'

function HomeScreen() {
  const location=useLocation();
  return (
    <div className='flex justify-center items-center gap-6'>
      Home Screen
    </div>
  )
}
// const SubButton=()=>{
//   return(

//   )
// }
export default HomeScreen