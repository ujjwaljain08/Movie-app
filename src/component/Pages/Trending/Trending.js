import axios from 'axios'
import React, { useState,useEffect } from 'react'
 import SingleContent from "../../SingleContent/SingleContent"
import CustomPagination from "../../Pagination/CustomPagination"
import "./Trending.css"


function Trending() {
    const [content, setContent] = useState([]);
    const [isData,setData]=useState(false)

    
    const [page, setpage] = useState(1);
    const fetchTrending=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        setContent(data.results)
        setData(true)
        console.log(data)
    }
  useEffect(() => {
       fetchTrending()
  }, [page]);
 
    return (
        <div>
            <span className="pageTitle">TrendinG</span>
            <h1 className="loding" style={{color:"white"}}>  {isData?"":"Loding..."}</h1>

            <div className="trending">
                {
                    content&&content.map((item)=>(
                      
                        <SingleContent
                         key={item.id}
                          id={item.id} 
                          poster={item.poster_path}
                          title={item.title || item.name}
                          date={item.first_air_date ||item.release_date}
                          media_type={item.media_type}
                          vote_average={item.vote_average}
                          />
                    ))
                }
            </div>
            <CustomPagination setpage={setpage} />
        </div>
    )
}

export default Trending
