import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
   let apiData= props.courses;
   let category=props.category;
   const[likedCourses,setLikedCourses]=useState([]);
   
   const allCourses = [];
   function extractAllCourses(apiData) {
   
    if(category==="All")
    {
    for (const category in apiData.data) {
      if (apiData.data.hasOwnProperty(category)) {
        const categoryCourses = apiData.data[category];
        allCourses.push(...categoryCourses);
      }
      return allCourses;
    }
  }
  else {
     return apiData.data[category];
  }
  
   
  }
  extractAllCourses(apiData);
   
  return (
  <div className="flex flex-wrap justify-center gap-4 mb-4">
   {
    extractAllCourses(apiData).map((course)=>{
      return(
         <Card course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
      )
    })

  }
    

  
  </div>
   )

  
 
}

export default Cards;
