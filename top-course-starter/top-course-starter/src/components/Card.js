import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card=(props)=>{
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;
    let course= props.course;  
    function clickhandler(){

        if(likedCourses.includes(course.id))
        {
             //iska matlab ki already yeh card liked courses me hai to ise hataana padega 
             setLikedCourses((prev)=>prev.filter( (courseid)=>courseid!==course.id));
             //iska matlab hai ki liked courses me se saare un courses ko filter hone do jinki id hamaare current liked course ke baraabar nahi hai
             toast.warning("Like Removed");
        }
        else {
            // iska matlab ki hamara course pehle unliked tha to ab use like karwaana hai 
            if( likedCourses.length===0)
            { 
                setLikedCourses([course.id]);

            }
            else {

                // iska matlab pehle se hi kihc courses liked pade the to hame usme hamara current course add karna hai 
                setLikedCourses((prev)=>[...prev, course.id]);

            }
            toast.success("Liked Successfully");
        }
         
        


    }

  function getIcon()
  {

  }

 
return(
 <div className="bg-bgDark rounded-md w-[300px] overflow-hidden">
    <div className="relative "> 
        <img src={course.image.url}></img>
       

    <div className="bg-white w-[40px] h-[40px] rounded-full absolute flex justify-center items-center right-2 bottom-3 ">
        <button onClick={clickhandler}>
          {  
          likedCourses.includes(course.id) ? (
            <FcLike fontSize="1.75rem" />
             ):(

            <FcLikePlaceholder fontSize="1.75rem"/>
          )
         }
            
       </button>
    </div>

    </div>
    <div>
    <div className="p-4">
    <p className="text-white font-semibold text-lg leading-6  ">{course.title}</p>
    <p className="mt-2 text-white ">
        {
            course.description.length>100 ? 
            (course.description.substr(0,100))+"...":(course.description)
          }
        </p>
        
    
    </div>
    </div>




 </div>

)


}

export default Card;