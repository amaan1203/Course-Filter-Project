import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {filterData}  from "./data";
import { apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

   const [courses,setCourses]= useState([]);
   const [loading,setLoading]= useState(true);


   useEffect(()=>{
    const fetchData= async ()=>{
      
      setLoading(true);
      try{
        const res= await fetch(apiUrl);
        const output =await res.json();
         setCourses(output);
      }
      catch(error)
      {
        toast.error("Something Went Wrong");
      }

      setLoading(false);
    }

    fetchData();
   },[])

   const [category,setCategory]= useState(filterData[0].title);

  return <div className="flex flex-col min-h-screen">
    <Navbar></Navbar>
    <div className="bg-bgDark2">
    <Filter filterData={filterData} category={category} setCategory={setCategory} ></Filter>

    <div className="w-11/12 max-x-[1200px] flex-wrap mx-auto flex justify-center items-center min-h-screen">

      {
        loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category} setCategory={setCategory}></Cards>)
      }

    </div> 
    </div>
    
  </div>
};

export default App;
