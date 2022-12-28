import React, { useState } from "react";
import Child from "./Child"
import "bootstrap/dist/css/bootstrap.min.css";


function Parent(){
    let [numOfTotalLikes,setNumOfTotalLikes] = useState(0);

    const totalLikes =  () => {
        setNumOfTotalLikes(numOfTotalLikes + 1)

    }
    return(
        <>
        <h1>Nature Images</h1>
        <h3>Total Of Likes: {numOfTotalLikes}</h3>
        <Child
        image_url =  "https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg"
        title = "nature1"
        totalLikes =  {totalLikes} />
        <Child
        image_url =  "https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg"
        title = "nature2"
        totalLikes =  {totalLikes} />
        <Child
        image_url =  "https://wallpapercave.com/wp/u9AVLry.jpg"
        title = "nature3"
        totalLikes =  {totalLikes} />

        
            
        </>
    )
}

export default Parent;