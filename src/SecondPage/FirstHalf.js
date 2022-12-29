import React from "react";
import AnimatedCheckbox from "./Checkbox";





  function FirstHalf() {
    return (
      
      <div className="FirstHalf">
        <h1>The Best Food!</h1>
      <p>Welcome to the Smart Meals Website</p>
      <p>Smart Meals, a name that is legendary in the hearts of the people, especially culinary lovers, not only Malang but all of Indonesia.</p>
      <p>Smart Meals, a balance between commitment and work.</p>
      <React.Fragment>
        <AnimatedCheckbox/> The food here uses 100% natural preservatives
        <AnimatedCheckbox/> The packaging here is very up-to-date and safe
        <AnimatedCheckbox/>A confortable place to hang out and suitable for your family and friends
       </React.Fragment>
     
  

      </div>
      
    )

}

export default FirstHalf;