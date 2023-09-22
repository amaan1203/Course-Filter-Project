import React from "react";

const Filter = (props) => {
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;

    // console.log("now the title is ");
    // console.log(category);

    function filterHandler(title)
    {
       setCategory(title);

    }
    // console.log("now the category is ");
    // console.log(category);
    return (
        
  
        <div className={`flex  flex-wrap  max-w-max w-11/12 space-x-4 gap-y-4 mx-auto justify-center py-4`}>
            {filterData.map((data) => {
                // console.log(data.title);
                return (<button onClick={()=>{filterHandler(data.title)}} className={`text-lg  px-2 py-1 rounded-md  font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-200 ${category===data.title ? (
                    "bg-opacity-60 border-white"
                ):("bg-opacity-40 border-transparent")}`}>

                    {data.title}    

                </button>)
            })}
        </div>)
};

export default Filter;
